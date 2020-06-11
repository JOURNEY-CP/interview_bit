import React, { Component } from 'react';
import "./style.css";
const axios = require('axios').default;

export default class List extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      response:"hi",
      data: []
    };

  }
  async componentDidMount(){
     setTimeout(function() { //Start the timer
      this.setState({render: true}) //After 1 second, set render to true
  }.bind(this), 1000)
    const res =await axios.get('http://localhost:4000/api/list')
    this.state.data=await res.data;
  }
  render () {
      return (
        this.state.data.map((s)=>(
            <div>
                <div>
                    <div class="row list">
                        <div class="listItem col-1">
                          <a href={"day/"+s.number}>{s.number}</a>
                        </div>
                        <div class="listItem col-2">{s.date}</div>
                        <div class="listItem col-5">
                            <a href={s.link}>{s.topic}</a>
                        </div>
                        <div class="listItem col-1">{s.sub_topic_count}</div>
                        <div class="listItem col-1">{s.abhi}</div>
                        <div class="listItem col-1">{s.sita}</div>
                        <div class="listItem col-1">{s.harsha}</div>
                    </div>
                </div>
            </div>
        ))
      )
   }
}