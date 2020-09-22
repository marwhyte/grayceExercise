import React, { useState } from "react";
import { Modal, Button } from "antd";

const ShowConnections = (props) => {
  const [visible, setVisible] = useState(false);
  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (e) => {
    console.log(e);
    setVisible(false);
  };

  const handleCancel = (e) => {
    console.log(e);
    setVisible(false);
  };

  return (
    <div className="connections">
      <button className="button" type="primary" onClick={showModal}>
        Open Modal
      </button>
      <Modal
        title="Your Connections"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {props.connections.length ? (
          <div>
            {props.connections.map((connection) => (
              <div key={connection.id}>
                <p>
                  <b>{connection.client.name}</b> is connected to{" "}
                  <b>{connection.expert.name}</b>
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p>You have no Connections</p>
        )}
      </Modal>
    </div>
  );
};

export default ShowConnections;
