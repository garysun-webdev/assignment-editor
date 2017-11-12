// Exports actions to describe updates to the `editors` state in the Redux tree.

export const EDITORS_CHANGE = 'EDITORS_CHANGE';
export const WORDCOUNT_UPDATE = 'WORDCOUNT_UPDATE';

export function editorsChange(editorKey, change) {
  return {
    type: EDITORS_CHANGE,
    editorKey,
    change,
  };
}

export function wordCountUpdate(wordCount) {
  return {
    type: WORDCOUNT_UPDATE,
    wordCount
  };
}

