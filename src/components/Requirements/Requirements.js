// @flow
import React from 'react';
import PropTypes from 'prop-types';
import RelativeDate from '../RelativeDate';

function getRelativeDate(dateString){
  
  const dueDate = Date.parse(dateString);
  const interval = (dueDate - Date.now())/1000;
  
  var day = parseInt(interval / 3600 / 24); 
  var hour = parseInt((interval - day * 24 * 3600) / 3600);
  var min = parseInt((interval - day * 24 * 3600 - hour * 3600) / 60);
  
  if (interval < 0) {
        hour = 0 - hour;
        min = 0 - min;
  }

  const relativeDate = `${day} day ${hour} hour ${min} min left`
  return relativeDate;
}



function Requirements(props) {
  const {
    dueDate,
    draftDueDate,
    wordLimit,
    gradeValue,
  } = props;

  return (
    <div className="Requirements">
      <h2>Requirements</h2>
      <ol>
        { !dueDate ?
          null :
          <li>
            <strong>Due Date: </strong>
            <u>{dueDate}.</u>
            <RelativeDate dueDateString={dueDate}/>
          </li>
        }

        { !gradeValue ?
          null :
          <li>
            <strong>Marks: </strong>
            <u>{gradeValue}%</u>
          </li>
        }

        { !wordLimit ?
          null :
          <li>
            <strong>Limit: </strong>
            <u>{wordLimit} words.</u>
          </li>
        }

        { !draftDueDate ?
          null :
          <li>
            <strong>Drafting Due Date: </strong>
            <u>{draftDueDate}.</u>
          </li>
        }
      </ol>
    </div>
  );
}

Requirements.propTypes = {
  dueDate: PropTypes.string,
  draftDueDate: PropTypes.string,
  wordLimit: PropTypes.number,
  gradeValue: PropTypes.number,
};

Requirements.defaultProps = {
  dueDate: null,
  draftDueDate: null,
  gradeValue: null,
};

export default Requirements;
