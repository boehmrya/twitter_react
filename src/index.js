import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Tweet(props) {
  return (
    <div className="tweet">
      <div className="text">{props.text}</div>
      <div className="date">{props.date}</div>
    </div>
  );
}


function TweetList(props) {
  const tweets = props.tweets.map((tweet, index) => {
    return (
      <li key={index}>
        <Tweet
          text={tweet.text}
          date={tweet.date}
        />
      </li>
    );
  });

  return (
    <div className="tweet-list">{ tweets }</div>
  );
}


class MicroBlogWrap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];
    const d = new Date();
    const date = monthNames[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
    const tweet = {
      text: this.state.value,
      date: date,
    }
    this.setState({tweets: this.state.tweets.push(tweet)});

    event.preventDefault();
  }

  render() {
    return (
      <div className="list">
        <h1 className="header">Welcome to MicroBlogger</h1>
        <TweetForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          value={this.state.value}
        />
        <TweetList tweets={this.state.tweets} />
      </div>
    );
  }
}


class TweetForm extends React.Component {
  render() {
    return (
      <div className="wrap">
        <form onSubmit={this.props.handleSubmit}>
          <label for="tweetBox">Enter your tweet:</label>
          <textarea id="tweetBox" className="form-control" name="" value={this.props.value} onChange={this.props.handleChange} rows="4" cols="50"></textarea>
          <button type="submit" className="btn btn-primary mb-2">Submit Tweet</button>
        </form>
        <div className="live-tweet">{this.props.value}</div>
      </div>
    );
  }
}


ReactDOM.render(
  <MicroBlogWrap />,
  document.getElementById('root')
);
