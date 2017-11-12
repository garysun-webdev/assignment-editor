import { COUNTLIST_UPDATE} from '../actions/countActions';

const initialState = [];

export default function config(state = initialState, action){
  switch (action.type) {
    case COUNTLIST_UPDATE: 
      return [
        ...state,
        action.wordCount
      ]
    
    default:
      return state
  }
}