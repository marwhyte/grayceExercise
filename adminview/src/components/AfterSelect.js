import React, { useState } from "react";

const AfterSelect = (props) => {
  return (
    <div className="afterSelect">
      {" "}
      {props.selectedExpert ? (
        <div>
          {" "}
          <button
            className="button"
            type="primary"
            onClick={props.addConnection}
          >
            Connect <b> {props.client.name} </b> with{" "}
            <b> {props.selectedExpert.name} </b>
          </button>
        </div>
      ) : (
        <p>Select An Expert To Continue</p>
      )}
    </div>
  );
};

export default AfterSelect;
