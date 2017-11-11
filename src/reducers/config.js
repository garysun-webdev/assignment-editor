import { TAG_SWITCH } from '../actions/configActions';

const initialState = {
  currentTag: 0
};

export default function config(state = initialState, action){
  switch(action.type){
    case TAG_SWITCH: {
      return {
        ...state,
        currentTag: action.tagId
      }
    };

    default: {
      return state;
    }
  }
}