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
    const res =await axios.get('http://localhost:4000/api/day/'+window.location.href.substring(window.location.href.lastIndexOf('/') + 1));
    this.state.data=await res.data;
  }
  render () {
      return (
        this.state.data.map((s)=>(
            <div>
                <div class="list">
                    <div class="row list">
                        <div class="col-1">{s.number}</div>
                        <div class="col-2">{s.date}</div>
                        <div class="col-5">
                            <a href={s.link}>{s.topic}</a>
                        </div>
                        <div class="col-1">{s.sub_topic_count}</div>
                        <div class="col-1">{s.abhi}</div>
                        <div class="col-1">{s.sita}</div>
                        <div class="col-1">{s.harsha}</div>
                    </div>
                </div>
            </div>
        ))
      )
   }
}