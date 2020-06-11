var express = require('express');
var router = express.Router();
var url=require('url');

const mysql = require('mysql');

const con = mysql.createConnection({
	  host: "localhost",
	  user: "root",
	  database: 'interview_bit',
});
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
});
router.get('/list', function(req, res, next) {
  const myQuery="SELECT * FROM day"
  con.query(myQuery, function (err, result, fields) {
		if (err){
			res.send('an error occoured');
			throw err;
		}
		console.log(result);
		res.send(result);
	});
});
router.post('/add', function(req, res, next) {
  const myQuery="INSERT INTO day (number,date,link,topic,sub_topic_count,abhi,sita,harsha) VALUES ("
                  +req.body.number+",'"
                  +req.body.date+"','"
                  +req.body.link+"','"
                  +req.body.topic+"','"
                  +req.body.sub_topic_count+"'"
                  +",0,0,0);"
  con.query(myQuery, function (err, _result, _fields) {
		if (err){
			res.send('an error occoured');
			throw err;
		}
		for (i = 0; i < req.body.sub_topic_count; i++) {
			const mySubQuery="INSERT INTO data (number,sub_topic_num,abhi,sita,harsha) VALUES ("
  	            	+req.body.number+","
    	        	+i+","
    	    	    +false+","
     	    		+false+","
	            	+false
					+");";
			con.query(mySubQuery, function (err, _result, _fields){
				if(err)res.send('an error occoured');
			});
		}
		res.send("done");
	});
});
router.put('/data', function(req, res, next) {
	const myQuery="UPDATE day "+
	" SET "+req.body.user+"="+req.body.user+"+"+(req.body.state==='true'?"1":"-1")+
	" WHERE number = "+req.body.number+";"
	const myQuery2=" UPDATE data "+
		" SET "+req.body.user+"="+req.body.state+
		" WHERE number = "+req.body.number+" and sub_topic_num="+req.body.sub_topic_num+";";
	con.query(myQuery, function (err, result, fields) {
		  if (err){
			  res.send('an error occoured');
			  throw err;
		  }
		  con.query(myQuery2,function (err,result2,fields){
			  if(err){
				  res.send('error2');
				  throw err;
			  }
		  })
		  console.log(result);
		  res.send(result);
	  });
});
router.get('/day/:day', function(req, res, next) {
	const number=url.parse(req.url, true).pathname.substring(5);
    const myQuery="SELECT * FROM data where number="+number;
  con.query(myQuery, function (err, result, fields) {
		if (err){
			res.send('an error occoured');
			//throw err;
		}
		console.log(result);
		res.send(result);
	});
});
module.exports = router;