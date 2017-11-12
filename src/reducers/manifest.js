// Manifest store reducers
import { RES_CLICK } from '../actions/manifestActions';

const initialState = {
  status: 'editing',
  assessment: {
    name: 'Cadmus Homework',
    timezone: 'Australia/Melbourne',
  },
  sheet: {
    dueDate: '2017-10-23T07:14:45+00:00',
    draftDueDate: '2017-10-23T07:14:45+00:00',
    wordLimit: 1000,
    gradeValue: 30,
    resources: [
      { name: 'Hacker News', url: 'https://news.ycombinator.com', openDate: 0},
      { name: 'Wikipedia', url: 'https://www.wikipedia.com', openDate: 0},
      { name: 'Google', url: 'https://www.google.com.uk', openDate: 0},
      { name: 'Facebook', url: 'https://www.facebook.com', openDate: 0},
      { name: 'Twitter', url: 'https://www.twitter.com', openDate: 0},
      { name: 'Instagram', url: 'https://www.nstagram.com', openDate: 0},
      // Add more fake resources here
    ],
  },
}

/**
 * The Manifest state is initially read-only for this task. Look at the README
 * for information on what the Manifest is.
 *
 * In production, the above 'initialState' will be fetched from a
 * server. Hence, we are just simulating a real prod environment.
 *
 * However, if you want to have actions to update the Manifest state, you
 * should add reducing functionality below.
 */

export default function manifest(state = initialState, action) {
  switch(action.type) {
    case RES_CLICK: {
      return {
        ...state,
        sheet: {
          ...state.sheet,
          resources: [
            ...state.sheet.resources.filter( r => r.name !== action.resource.name),
            Object.assign({}, action.resource)
          ]
        }
      }
    }

    default: {
      return state;
    }
  }
}
  
