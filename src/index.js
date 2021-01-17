import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Tweet(props) {
  return (
    <div className="tweet">
    </div>
  );
}


class TweetList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
    };
  }

  render() {
    return (
      <div className="list">
        <h1 className="header">Welcome to MicroBlogger</h1>
        <TweetForm />
        { this.state.tweets }
      </div>
    );
  }
}


class TweetForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="wrap">
        <form onSubmit={this.handleSubmit}>
          <label for="tweetBox">Enter your tweet:</label>
          <textarea id="tweetBox" className="form-control" name="" value={this.state.value} onChange={this.handleChange} rows="4" cols="50"></textarea>
          <button type="submit" className="btn btn-primary mb-2">Submit Tweet</button>
        </form>
        <div className="text-output">{this.state.value}</div>
      </div>
    );
  }
}



ReactDOM.render(
  <TweetList />,
  document.getElementById('root')
);
