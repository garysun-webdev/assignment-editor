import React, { Component } from 'react';

function ResourceItem(props) {
  const {name, url, openDate, resClick} = props;
  return (
    <li onClick={()=>resClick({name, url, openDate:Date.now()})}>
        {name}-{url}-{openDate}
    </li>
  )
}

export default ResourceItem;