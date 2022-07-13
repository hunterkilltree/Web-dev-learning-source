import React from 'react';

// class Counter extends React.Component {
//   render() {
//     let index = this.props.index;
//     return (
//       <div className="counter">
//         <button className="counter-action decrement" onClick={() => this.props.changeScore(index, -1)}> - </button>
//         <span className="counter-score"> {this.props.score} </span>
//         <button className="counter-action increment" onClick={() => this.props.changeScore(index, 1)}> + </button>
//       </div>
//     );
//   }
// }

// better because component is only receiving input through props and rendering UI.
const Counter = (props) => {

  let index = props.index;

  return (
    <div className="counter">
      <button className="counter-action decrement" onClick={() => props.changeScore(index, -1)}> - </button>
      <span className="counter-score"> {props.score} </span>     
      <button className="counter-action increment" onClick={() => props.changeScore(index, 1)}> + </button>
    </div>
  );
}

export default Counter;