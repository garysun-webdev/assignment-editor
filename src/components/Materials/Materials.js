import React from "react";
import PropTypes from "prop-types";
import "./Materials.css";

import InstructionsWithState from "../../containers/InstructionsWithState";
import ProgressWithState from "../../containers/ProgressWithState";

function Materials({ currentTag }) {
  if (currentTag === 0) {
    return (
      <div className="Materials">
        <InstructionsWithState />
      </div>
    );
  }

  if (currentTag === 1) {
    return (
      <div className="Materials">
        <ProgressWithState />
      </div>
    );
  }
}

Materials.propTypes = {
  currentTag: PropTypes.number.isRequired
};

export default Materials;
