import React, { Component } from 'react';
const axios = require('axios').default;

export default class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number:"",
      link: "",
      date: "",
      topic: "",
      sub_topic_count:""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    
    this.setState({[nam]: val});
  }

    handleSubmit=(event)=> {
        event.preventDefault();
        axios.post('http://localhost:4000/api/add', {
            number:this.state.number,
            date:this.state.date,
            link:this.state.link,
            topic:this.state.topic,
            sub_topic_count:this.state.sub_topic_count,
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
  render() {
    return (
      <form >
        <h1>Hello</h1>
        <p>day number:</p>
        <input type='text' name='number' onChange={this.myChangeHandler}/>
        <p>date:</p>
        <input type='text' name='date' onChange={this.myChangeHandler}/>
        <p>link:</p>
        <input type='text' name='link' onChange={this.myChangeHandler}/>
        <p>topic</p>
        <input type='text' name='topic' onChange={this.myChangeHandler}/>
        <br/>
        <p>sub_topic_count</p>
        <input type='text' name='sub_topic_count' onChange={this.myChangeHandler}/>
        <br/>
        <input
          type='submit'
          onClick={this.handleSubmit}
        />
      </form>
    );
  }
}