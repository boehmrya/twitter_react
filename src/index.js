import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class TweetList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stepNumber: 0,
      xIsNext: true,
      orderAsc: true,
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
          <label>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
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
