import React, { useState } from "react";
import { Card } from "antd";

const Client = (props) => {
  return (
    <div className="client">
      <Card
        title={props.client.name}
        style={{ width: 400, height: 500, textAlign: "left" }}
      >
        <p>
          Age: <b>{props.client.age}</b>
        </p>
        <p>
          Needs Most Help with: <b>{props.client.challenge}</b>
        </p>
      </Card>
    </div>
  );
};

export default Client;
