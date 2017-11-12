import React from 'react';
import PropTypes from 'prop-types';
import ResourceItem from '../ResourceItem';

import './Resources.css';

function Resources(props) {
  return (
    <div className="Resources">
      <h2>Resources</h2>
      <ul>
      {
        props.resources.map(r => (
          <ResourceItem key={r.url} name={r.name} url={r.url} openDate={r.openDate} resClick={props.resClick}/>
        ))
      }
      </ul>
    </div>
  );
}

Resources.propTypes = {
    resClick: PropTypes.func.isRequired,
    resources: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        openDate: PropTypes.number.isRequired,
    })).isRequired
};

export default Resources;
