export const COUNTLIST_UPDATE = 'COUNTLIST_UPDATE';

export function countListUpdate(wordCount) {
  return {
    type: COUNTLIST_UPDATE,
    wordCount
  };
}

