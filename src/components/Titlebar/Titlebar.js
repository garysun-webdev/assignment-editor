import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';

import { buildPathForPreview } from '../../utils/routeConfig';

import './Titlebar.css';

const style = {
  margin: 12,
};

class Titlebar extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };

    this.handleCloudSave = this.handleCloudSave.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  handleCloudSave() {
    this.setState({
      open: true,
    });
  }

  handleSubmit() {
    const workId = this.props.match.params.workId;
    const path = buildPathForPreview(workId);
    this.props.history.push(path);
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  render() {
    return (
      <div className="Titlebar">
        <div className="Titlebar-title">
          {this.props.title}
        </div>
        <div className="Titlebar-actions">
          <RaisedButton
            label="Cloud Save"
            style={style}
            onClick={this.handleCloudSave}
          />
          <RaisedButton
            label="Submit"
            primary
            style={style}
            onClick={this.handleSubmit}
          />
          <Snackbar
            open={this.state.open}
            message="Successfully saved your work!"
            autoHideDuration={4000}
            onRequestClose={this.handleRequestClose}
          />
        </div>
      </div>
    );
  }
}

export default Titlebar;
