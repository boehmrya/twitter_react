import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class List extends React.Component {
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

      </div>
    );
  }

}



ReactDOM.render(
  <List />,
  document.getElementById('root')
);
