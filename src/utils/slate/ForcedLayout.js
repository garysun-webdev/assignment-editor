import { Block } from 'slate';

/**
 * ForcedLayout plugin creator for Slate.
 *
 * Ensures that the given slate editor always has the first block set to be a
 * `title` block.
 */
function ForcedLayout() {
  return {
    /**
     * A simple schema to enforce the nodes in the Slate document.
     *
     * @type {Object}
     */
    schema: {
      document: {
        nodes: [
          { types: ['title'], min: 1, max: 1 },
          { types: ['paragraph'], min: 1 },
        ],
        normalize: (change, reason, { node, child, index }) => {
          switch (reason) {
            case 'child_type_invalid': {
              return change.setNodeByKey(child.key, index === 0 ? 'title' : 'paragraph');
            }
            case 'child_required': {
              const block = Block.create(index === 0 ? 'title' : 'paragraph');
              return change.insertNodeByKey(node.key, index, block);
            }
            default: return undefined;
          }
        },
      },
    },
  };
}

export default ForcedLayout;
