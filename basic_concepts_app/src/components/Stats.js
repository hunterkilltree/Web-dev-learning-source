import React from 'react';

const Stats = (props) => {

  const totalPlayers = props.players.length;

  // we need to iterate over each player and state in order to get the total points.
  // reduce method
  // reduce use when we want to end up with the value rather then an array example number.

  // reduce method use in players array; the reduce methods takes a callback function that gets
  // executed on each element in array
  // callback takes two parameters total, player 
  // init the second argument in reduce method to be 0.
  const totalPoints = props.players.reduce((total, player) => {
    return total + player.score;
  }, 0);

  return (
    <table className="stats">
      <tbody> 
        <tr>
          <td>Players:</td>
          <td>{ totalPlayers }</td>
        </tr>
        <tr>
          <td>Total Points:</td>
          <td>{ totalPoints }</td>       
        </tr>
      </tbody>
    </table>
  );
}

export default Stats;
