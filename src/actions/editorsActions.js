// Exports actions to describe updates to the `editors` state in the Redux tree.

export const EDITORS_CHANGE = 'EDITORS_CHANGE';

export function editorsChange(editorKey, change) {
  return {
    type: EDITORS_CHANGE,
    editorKey,
    change,
  };
}
