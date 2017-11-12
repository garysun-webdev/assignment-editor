import { combineReducers } from 'redux';

import manifest from './manifest';
import editors from './editors';
import config from './config';
import count from './count';

/**
 * Root redux reducer.
 *
 * The current redux tree has the following structure:
 *
 * type ReduxTree = {
 *   manifest: Manifest,
 *   editors: Editors,
 * }
 *
 * type Manifest = {
 *   status: 'editing' | 'submitted',
 *   assessment: {
 *     name: String,
 *     timezone: String,
 *   },
 *   sheet: {
 *     dueDate: string,
 *     draftDueDate: string,
 *     wordLimit: number,
 *     gradeValue: number,
 *     resources: Resource[],
 *   }
 * }

 * type Resource = {
 *   name: string,
 *   url: string,
 * }

 * type Editors = {
 *   body: Value,
 *   notes: Value,
 *   sheet: Value,
 * }
 *
 * Here the type `Value` is a `slate` editor `Value` type.
 *
 */
const rootReducer = combineReducers({
  manifest,
  editors,
  config,
  count
});

export default rootReducer;
