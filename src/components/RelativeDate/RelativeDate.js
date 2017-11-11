import React, { Component } from 'react';

class RelativeDate extends Component {
  constructor() {
    super();
    this.state = { interval:"" };
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
    const hour = parseInt((interval - day * 24 * 3600) / 3600);
    const min = parseInt((interval - day * 24 * 3600 - hour * 3600) / 60);

    const relativeDate = `${day} day ${hour} hour ${min} min left`;
    return relativeDate;
  }

  render(){
    
    if(this.state.interval==""){
      return(
        <p>Loading...</p>
      )
    }

    return(
      <p>{this.setTimeFormat()}</p>
    )
  }
}

export default RelativeDate;