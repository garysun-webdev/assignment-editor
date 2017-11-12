import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import ActionAspectRatio from 'material-ui/svg-icons/action/aspect-ratio';

import './Toolbar.css';

class Toolbar extends Component {
  
  constructor(){
    super();
    this.state={
      preSize:null
    }

    this.toggle = this.toggle.bind(this);
  }

  static propTypes = {
    currentTag: PropTypes.number.isRequired,
    paneSize: PropTypes.number.isRequired,
    tagSwitch: PropTypes.func.isRequired,
    sizeChange: PropTypes.func.isRequired
  }

  toggle(){
    if(this.props.paneSize!==1){
      this.setState({preSize: this.props.paneSize});
      this.props.sizeChange(1);
    } else {
        if(this.state.preSize){
          this.props.sizeChange(this.state.preSize)
          this.setState({preSize: null});
        }
    }
  }


  render(){
    const {tagSwitch, currentTag} = this.props;
    return(
      <div className="Toolbar">
        <div className="Toolbar-materials">
          <FlatButton label="Instructions" onClick={()=>tagSwitch(0)} primary={currentTag===0} />
          <FlatButton label="Progress" onClick={()=>tagSwitch(1)} primary={currentTag===1} /> 
        </div>
        <div className="Toolbar-configuration">
          <IconButton onClick={()=>this.toggle()}>
            <ActionAspectRatio />
          </IconButton>
        </div>
      </div>
    )
  }
}


export default Toolbar;