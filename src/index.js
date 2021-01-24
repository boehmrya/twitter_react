import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function hoursToStandard(hours) {
  if (hours <= 12) {
    return hours;
  }
  else {
    return (hours - 12);
  }
}


function periodOfDay(hours) {
  if (hours < 12) {
    return 'AM';
  }
  return 'PM';
}

class TweetResponse extends React.Component {
  render() {
    return (
      <div className="tweet-response">
        <div className="make-retweet">Retweet</div>
        <div className="make-quote-tweet">Quote Tweet</div>
        <div className="make-like">Like</div>
      </div>
    );
  }
}


class TweetStats extends React.Component {
  render() {
    return (
      <div className="tweet-stats">
        <div className="retweets">{this.props.reTweets}</div>
        <div className="quote-tweets">{this.props.quoteTweets}</div>
        <div className="likes">{this.props.likes}</div>
      </div>
    );
  }
}


class Tweet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reTweets: 0,
      quoteTweets: 0,
      likes: 0,
    };

    /*
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    */
  }

  render() {
    return (
      <div className="tweet-wrap">
        <div className="tweet">
          <div className="text">{this.props.text}</div>
          <div className="date">{this.props.date}</div>
        </div>
        <TweetStats />
        <TweetResponse />
      </div>
    );
  }
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


class TweetForm extends React.Component {
  render() {
    return (
      <div className="wrap">
        <form onSubmit={this.props.handleSubmit}>
          <label for="tweetBox">Enter your tweet:</label>
          <textarea id="tweetBox" className="form-control" name="" value={this.props.value} onChange={this.props.handleChange} rows="4" cols="50"></textarea>
          <button type="submit" className="btn btn-primary mb-2">Submit Tweet</button>
        </form>
      </div>
    );
  }
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
    const time = hoursToStandard(d.getHours()) + ':' + d.getMinutes() + ' ' + periodOfDay(d.getHours);
    const date = time + ' ' + monthNames[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();

    const tweet = {
      text: this.state.value,
      date: date,
    }

    this.setState({
      tweets: this.state.tweets.concat(tweet),
      value: '',
    });

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


ReactDOM.render(
  <MicroBlogWrap />,
  document.getElementById('root')
);
