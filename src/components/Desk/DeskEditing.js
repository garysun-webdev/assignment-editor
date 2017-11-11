import React, { Component } from 'react';
import SplitPane from 'react-split-pane';

import MaterialsWithState from '../../containers/MaterialsWithState';
import WorkWithState from '../../containers/WorkWithState';

import './Desk.css';

class DeskEditing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      materialsPaneSize: 400,
      workPaneSize: 800,
      containerWidth: 0,
      paneCls: '',
    };

    this.updateDimensions = this.updateDimensions.bind(this);
    this.handleDragEnd = this.handleDragEnd.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
    this.updateDimensions();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions() {
    const containerWidth = this.containerEl.clientWidth;
    this.setState({
      containerWidth,
      workPaneSize: containerWidth - this.state.materialsPaneSize,
    });
  }

  handleDragEnd() {
    if (this.state.materialsPaneSize === 1) {
      // Set a snap class to animate the snapping
      this.setState({ paneCls: 'SplitPane--snap' });
      // Remove the class after 300ms (transition duration)
      setTimeout(() => {
        this.setState({ paneCls: '' });
      }, 300);
    } else {
      // Reset the class
      this.setState({ paneCls: '' });
    }
  }

  handleDrag(width) {
    if (width <= 180) {
      this.setState({
        materialsPaneSize: 1,
        workPaneSize: this.state.containerWidth - 1,
      });
    } else {
      this.setState({
        materialsPaneSize: width,
        workPaneSize: this.state.containerWidth - width,
      });
    }
  }


  render() {
    return (
      <div
        className="DeskEditing"
        ref={(node) => { this.containerEl = node; }}
      >
        <SplitPane
          className={this.state.paneCls}
          split="vertical"
          maxSize={-45}
          minSize={0}
          size={this.state.materialsPaneSize}
          onChange={this.handleDrag}
          onDragFinished={this.handleDragEnd}
        >
          <MaterialsWithState />
          <WorkWithState />
        </SplitPane>
      </div>
    );
  }
}


export default DeskEditing;
