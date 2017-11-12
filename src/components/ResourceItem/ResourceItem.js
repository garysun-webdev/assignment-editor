import React from 'react';
import PropTypes from 'prop-types';
import ActionOpenInNew from 'material-ui/svg-icons/action/open-in-new';
import ActionCheckCircle from 'material-ui/svg-icons/action/check-circle';
import moment from 'moment';


function ResourceItem(props) {
  const {name, url, openDate, resClick} = props;
  return (
    <li >
        <ActionCheckCircle style={{width: 18, height: 18, color: openDate ? 'green' : '#aaaaaa'}} />
          <div>
              <a href={url} target="_blank" onClick={()=>resClick({name, url, openDate:Date.now()})}>{name} </a>
              { !openDate ?
                null :
                <label>
                    ({moment(openDate).format("YYYY-MM-DD hh:mm a")})
                </label>
              }
          </div>
        <ActionOpenInNew />
    </li>
  )
}

ResourceItem.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  openDate: PropTypes.number.isRequired,
  resClick: PropTypes.func.isRequired
};

export default ResourceItem;