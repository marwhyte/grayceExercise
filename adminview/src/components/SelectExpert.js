import React from "react";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

const SelectExpert = (props) => {
  const handleMenuClick = (e) => {
    const newExpert = props.experts.filter(
      (expert) => expert.id.toString() === e.key.toString()
    );

    props.setSelectedExpert(newExpert[0]);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      {props.recommendedExperts.map((expert) => (
        <Menu.Item key={expert.id}>
          <div>
            {" "}
            <p>{expert.name}</p>
            <p>
              <span role="img" aria-label="star">
                ⭐
              </span>
              Specialty: {expert.specialty}
            </p>
          </div>
        </Menu.Item>
      ))}
      {props.otherExperts.map((expert) => (
        <Menu.Item key={expert.id}>
          <div>
            {" "}
            <p>{expert.name}</p>
            <p>Specialty: {expert.specialty}</p>
          </div>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div>
      <h3>Select An Expert</h3>
      <Dropdown overlay={menu}>
        <button
          className="ant-dropdown-link"
          href="#"
          onClick={(e) => e.preventDefault()}
          style={{
            backgroundColor: "#fff",
            color: "#1890ff",
            border: "none",
            cursor: "pointer",
          }}
        >
          View Here <DownOutlined />
        </button>
      </Dropdown>
    </div>
  );
};

export default SelectExpert;
