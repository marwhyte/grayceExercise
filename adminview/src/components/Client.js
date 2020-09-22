import React from "react";
import { Card } from "antd";
import SelectExpert from "./SelectExpert";
import AfterExpertSelect from "./AfterExpertSelect";

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
        extra={
          <button
            onClick={props.skip}
            style={{
              border: "none",
              color: "#1890ff",
              backgroundColor: "#fff",
              outline: "none",
              cursor: "pointer",
            }}
          >
            Skip
          </button>
        }
        style={{
          width: 500,
          height: 400,
          textAlign: "left",
        }}
      >
        <div>
          <p>
            Client Age: <b>{props.client.age}</b>
          </p>
          <p>
            Client Needs Most Help with: <b>{props.client.challenge}</b>
          </p>
          <SelectExpert
            recommendedExperts={recommendedExperts}
            otherExperts={otherExperts}
            setSelectedExpert={props.setSelectedExpert}
            experts={props.experts}
          />
        </div>
        <AfterExpertSelect
          selectedExpert={props.selectedExpert}
          client={props.client}
          addConnection={props.addConnection}
        />
      </Card>
    </div>
  );
};

export default Client;
