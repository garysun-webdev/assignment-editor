import React from 'react';
import PropTypes from 'prop-types';
import RelativeDate from '../RelativeDate';
import moment from 'moment';

import './Requirements.css';

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
      <ul>
        { !dueDate ?
          null :
          <li>
            <strong>Due Date: </strong>
            <u>{moment(dueDate).format("YYYY-MM-DD(dddd) hh:mm a")}.</u>
          </li>
        }

        { !dueDate ?
          null :
          <li>
            <strong>Time Left: </strong>
            <u><RelativeDate dueDateString={dueDate}/></u>
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
            <u>{moment(draftDueDate).format("YYYY-MM-DD(dddd) hh:mm a")}.</u>
          </li>
        }
      </ul>
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
