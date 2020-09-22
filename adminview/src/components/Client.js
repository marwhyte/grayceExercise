import React, { useState } from "react";
import { Card } from "antd";
import SelectExpert from "./SelectExpert";
const Client = (props) => {
  const recommendedExperts = props.experts.filter(
    (expert) => expert.specialty === props.client.challenge
  );

  const otherExperts = props.experts.filter(
    (expert) => expert.specialty !== props.client.challenge
  );
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
        <SelectExpert
          recommendedExperts={recommendedExperts}
          otherExperts={otherExperts}
          setSelectedExpert={props.setSelectedExpert}
          experts={props.experts}
        />
        {props.selectedExpert ? (
          <p>{props.selectedExpert.name}</p>
        ) : (
          <p>No expert Selected</p>
        )}
      </Card>
    </div>
  );
};

export default Client;
