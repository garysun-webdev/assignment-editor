import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Editor } from 'slate-react';
import Types from 'slate-prop-types';

import plugins from '../../utils/slate/plugins';
import ForcedLayout from '../../utils/slate/ForcedLayout';

import './Work.css';

const workPlugins = [ ...plugins, ForcedLayout() ];

class Work extends Component {
  constructor(){
    super();
    this.keyUpHandler = this.keyUpHandler.bind(this);
    this.updateWordCount = this.updateWordCount.bind(this);
  }

  componentDidMount(){
    this.updateWordCount();

  }

  updateWordCount(){
    const words = this.props.editorValue._map._root.entries[1][1].text;
    const wordList = words.trim().split(" ");
    const wordCount = wordList.length-1;
    this.props.onWordChange(wordCount);
  }

  static propTypes = {
    editorValue: Types.value.isRequired,
    onChange: PropTypes.func.isRequired,
  }

  keyUpHandler() {
    window.clearTimeout(this.timer);
    this.timer = setTimeout(()=>{
      this.updateWordCount();
    }, 500)
  }

  render() {
    //performance problem
    const editorPlugin = {
      onKeyUp: this.keyUpHandler
    }

    const plugins = [
      editorPlugin
    ]

    return (
      <div className="Work Paper">
        <Editor
          ref={(node) => { this.editor = node; }}
          value={this.props.editorValue}
          //plugins={workPlugins}
          plugins={plugins}
          onChange={this.props.onChange}
          placeholder="Enter your assignment here..."
          spellCheck
        />
      </div>
    );
  }
}

export default Work;
