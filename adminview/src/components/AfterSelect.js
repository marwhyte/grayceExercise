import React, { useState } from "react";
import { Button } from "antd";

const AfterSelect = (props) => {
  return (
    <div className="afterSelect">
      {" "}
      {props.selectedExpert ? (
        <div>
          {" "}
          <Button type="primary">
            Connect <b> {props.client.name} </b> with{" "}
            <b> {props.selectedExpert.name} </b>
          </Button>
        </div>
      ) : (
        <p>Select An Expert To Continue</p>
      )}
    </div>
  );
};

export default AfterSelect;
