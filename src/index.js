import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


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
      tweetCount: 0,
    };
  }

  render() {

    return (
      <div className="list">
        <TweetForm />
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
          <textarea id="tweetBox" name="" value={this.state.value} onChange={this.handleChange} rows="4" cols="50"></textarea>
          <input type="submit" value="Submit" />
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
