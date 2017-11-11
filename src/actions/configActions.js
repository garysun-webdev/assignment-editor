// Exports actions to describe updates to the `config` state in the Redux tree.

export const TAG_SWITCH = 'TAG_SWITCH';

export function tagSwitch(tagId) {
  return {
    type: TAG_SWITCH,
    tagId
  };
}
