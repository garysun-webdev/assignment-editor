import { Value } from 'slate';

import { EDITORS_CHANGE, WORDCOUNT_UPDATE } from '../actions/editorsActions';

// Base editor values
import bodyValue from './editorValues/body.json';
import notesValue from './editorValues/notes.json';
import sheetValue from './editorValues/sheet.json';

const initialState = {
  body: Value.fromJSON(bodyValue),
  notes: Value.fromJSON(notesValue),
  sheet: Value.fromJSON(sheetValue),
  wordCount: 0
};

/**
 * State for the various Slate `Value`s rendered on the client.
 *
 * A `Value` is the model behind the slate `<Editor />` component. The
 * `EDITORS_CHANGE` redux action updates this model.
 */
 
export default function editors(state = initialState, action) {
  switch (action.type) {
    case EDITORS_CHANGE:
      return {
        ...state,
        [action.editorKey]: action.change.value,
      };
    case WORDCOUNT_UPDATE:
      return {
        ...state,
        wordCount: action.wordCount 
      };
    default:
      return state
  }
}
