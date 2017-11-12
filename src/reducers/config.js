import { TAG_SWITCH, SIZE_CHANGE } from '../actions/configActions';

const initialState = {
  currentTag: 0,
  materialsPaneSize: 400
};

export default function config(state = initialState, action){
  switch(action.type){
    case TAG_SWITCH: 
      return {
        ...state,
        currentTag: action.tagId
      }

    case SIZE_CHANGE:
      return {
        ...state,
        materialsPaneSize: action.paneSize
      }

    default: 
      return state;
  }
}