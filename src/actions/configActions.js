// Exports actions to describe updates to the `config` state in the Redux tree.

export const TAG_SWITCH = "TAG_SWITCH";
export const SIZE_CHANGE = "SIZE_CHANGE";

export function tagSwitch(tagId) {
  return {type: TAG_SWITCH, tagId};
}

export function sizeChange(paneSize) {
  return {type: SIZE_CHANGE, paneSize};
}
