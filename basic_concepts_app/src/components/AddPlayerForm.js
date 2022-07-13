import React from 'react';

class AddPlayerForm extends React.Component {
  
  state = {
    value: ''
  };

  handleValueChange = (e) => {
    this.setState( { value: e.target.value });
  }
  
  
  handleSubmit = (e) => {
    // e  to prevent the forms default behavior
    // if we don't prevent the form's default 
    // submit behavior, it will result in the 
    // brower posting a request back to the 
    // server => reload in the browser => lose 
    // all of our application state in the process
    e.preventDefault();
    this.props.addPlayer(this.state.value);
    this.setState({ value: ''});
  }

  render() {
    return (
      /*
        The on Submit event will execute the handleSubmit function as soon as the form
        is submitted by either clicking or entering the submit button
      */
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text"
          value={this.state.value}
          onChange={this.handleValueChange}
          placeholder="Enter a player's name"
        />

        <input
          type="submit"
          placeholder="Add Player"
        />
      </form>
    );
  }
}

export default AddPlayerForm;