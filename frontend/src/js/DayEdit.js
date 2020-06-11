import React, { Component } from 'react';
import "./style.css";
const axios = require('axios').default;

export default class List extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      response:"hi",
      number:window.location.href.substring(window.location.href.lastIndexOf('/') + 1),
      data: []
    };
    this.handleClick = this.handleClick.bind(this);
  }
  async componentDidMount(){
     setTimeout(function() { //Start the timer
      this.setState({render: true}) //After 1 second, set render to true
  }.bind(this), 1000)
    const res =await axios.get('http://localhost:4000/api/day/'+this.state.number);
    this.state.data=await res.data;
  }
  
  handleClick=(event)=> {
    event.preventDefault();
    const x=event.target.name.lastIndexOf("_");
    const user= event.target.name.substring(0,x);
    const sub_topic_num=event.target.name.substring(x+1);
    axios.put('http://localhost:4000/api/data', {
        number:this.state.number,
        user:user,
        state:event.target.checked,
        sub_topic_num:sub_topic_num
    })
    .then(function (response) {
        alert("Success");
        console.log(response);
        window.location.reload()
    })
    .catch(function (error) {
        alert("failed");
        console.log(error);
    });
}
  render () {
      return (
        this.state.data.map((s)=>(
            <div>
                <div class="list">
                    <div class="row list">
                        <div class="listItem col-3">{s.number}</div>
                        <div class="listItem col-3">{s.sub_topic_num}</div>
                        <div class="listItem col-2">
                            <input 
                                type="checkbox"
                                defaultChecked={s.abhi} 
                                name={"abhi_"+s.sub_topic_num} 
                                onChange={this.handleClick}
                            />
                        </div>
                        <div class="listItem col-2">
                            <input 
                                type="checkbox"
                                defaultChecked={s.sita} 
                                name={"sita_"+s.sub_topic_num} 
                                onChange={this.handleClick}
                            />
                        </div>
                        <div class="listItem col-2">
                            <input 
                                type="checkbox"
                                defaultChecked={s.harsha} 
                                name={"harsha_"+s.sub_topic_num} 
                                onChange={this.handleClick}
                            />
                        </div>
                    </div>
                </div>
            </div>
        ))
      )
   }
}