// @flow
import React from 'react';
import PropTypes from 'prop-types';

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
