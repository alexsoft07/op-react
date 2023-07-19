import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {

  constructor(props){
    super(props);
    this.state = {
      age : 39
    }
  }

  render() {
    return (
      <div>
        <h1>
          ¡Hellow { this.props.name } !
        </h1>
        <h2>
          You age is: { this.state.age }
        </h2>
        <div>
          <button onClick={this.brihday}>Cumplir años</button>
        </div>
      </div>
    );
  }

  /**Funcion para actualizar un valor */
  brihday = () => {
    this.setState((prevState) => (
      {
        age: prevState.age + 1  
      }
    ))
  }
}

Greeting.propTypes = {
  name: PropTypes.string,
};


export default Greeting;

