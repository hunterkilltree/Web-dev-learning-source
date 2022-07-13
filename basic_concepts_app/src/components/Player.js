import React from 'react';

import Counter from './Counter';
import Icon from './Icon';

// function Player(props) {
//   return (
//     <div className="player">
//       <span className="player-name">
//         <button className="remove-player" onClick={() => props.removePlayer(props.id)}>X</button>
//         {props.name}
//       </span>
//       <Counter
//         score={props.score}
//         index={props.index}
//         changeScore={props.changeScore}
//       />
//     </div>
//   );
// }

class Player extends React.PureComponent {
    render() {
          const {
              name,
              id,
              score,
              index,
              removePlayer,
              changeScore
          } = this.props;

            console.log(this.props.name + ' rendered');
          return (
            <div className="player">
              <span className="player-name">
                <button className="remove-player" onClick={() => removePlayer(id)}>X</button>
                <Icon isHighScore={this.props.isHighScore} />
                { name }
              </span>
              <Counter
                score={score}
                index={index}
                changeScore={changeScore}
              />
            </div>
          );

    }
}

export default Player;
