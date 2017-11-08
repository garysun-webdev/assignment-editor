import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Editor } from 'slate-react';
import Types from 'slate-prop-types';

import plugins from '../../utils/slate/plugins';
import ForcedLayout from '../../utils/slate/ForcedLayout';

import './Work.css';

const workPlugins = [ ...plugins, ForcedLayout() ];

class Work extends Component {
  static propTypes = {
    editorValue: Types.value.isRequired,
    onChange: PropTypes.func.isRequired,
  }

  render() {
    return (
      <div className="Work Paper">
        <Editor
          ref={(node) => { this.editor = node; }}
          value={this.props.editorValue}
          plugins={workPlugins}
          onChange={this.props.onChange}
          placeholder="Enter your assignment here..."
          spellCheck
        />
      </div>
    );
  }
}

export default Work;
