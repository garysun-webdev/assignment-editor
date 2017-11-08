import React from 'react';

/**
 * Render a Slate node.
 *
 * @param {Object} props
 * @return {Element}
 */

function renderNode(props) {
  const { attributes, children, node } = props;
  switch (node.type) {
    case 'block-quote': return <blockquote {...attributes}>{children}</blockquote>;
    case 'bulleted-list': return <ul {...attributes}>{children}</ul>;
    case 'title': return <h1 {...attributes}>{children}</h1>;
    case 'heading-one': return <h2 {...attributes}>{children}</h2>;
    case 'heading-two': return <h3 {...attributes}>{children}</h3>;
    case 'list-item': return <li {...attributes}>{children}</li>;
    case 'numbered-list': return <ol {...attributes}>{children}</ol>;
    default: return undefined;
  }
}

/**
 * Render a Slate mark.
 *
 * @param {Object} props
 * @return {Element}
 */

function renderMark(props) {
  const { children, mark } = props;
  switch (mark.type) {
    case 'bold': return <strong>{children}</strong>;
    case 'italic': return <em>{children}</em>;
    case 'underlined': return <u>{children}</u>;
    default: return undefined;
  }
}

/**
 * Basic Rich text plugin creator for Slate.
 */
function RichText() {
  return {
    renderNode,
    renderMark,
  };
}

export default RichText;
