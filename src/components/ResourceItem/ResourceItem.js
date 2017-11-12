import React from 'react';

function ResourceItem(props) {
  const {name, url, openDate, resClick} = props;
  return (
    <li onClick={()=>resClick({name, url, openDate:Date.now()})}>
        {name}-{url}
        { !openDate ?
          null :
          <p>
            <label>Last Click Time: </label>
            {openDate}
          </p>
        }
    </li>
  )
}

export default ResourceItem;