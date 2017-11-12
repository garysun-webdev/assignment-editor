import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RelativeDate extends Component {
  constructor() {
    super();
    this.state = { interval:"" };
  }
  static propTypes = {
    dueDateString: PropTypes.string.isRequired
  }

  componentDidMount(){
    this.intervalHandle = setInterval ( () => {
      const dueDate = Date.parse(this.props.dueDateString);
      const interval = (dueDate - Date.now())/1000;
      this.setState({interval});
    },1000 )
  }

  componentWillUnmount() {
    window.clearInterval(this.intervalHandle);
  }

  setTimeFormat() {
    const { interval } = this.state;
    const day = parseInt(interval / 3600 / 24); 
    let hour = parseInt((interval - day * 24 * 3600) / 3600);
    let min = parseInt((interval - day * 24 * 3600 - hour * 3600) / 60);
    if(interval<0){
      hour = -hour;
      min = -min;
    }
    const relativeDate = `${day} day ${hour} hour ${min} min`;
    return relativeDate;
  }

  render(){
    
    if(this.state.interval===""){
      return(
        <em>Loading...</em>        
      )
    }

    return(
      <em>{this.setTimeFormat()}</em>
    )
  }
}

export default RelativeDate;