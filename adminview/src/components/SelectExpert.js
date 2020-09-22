import React, { useState } from "react";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

const SelectExpert = (props) => {
  const handleMenuClick = (e) => {
    const newExpert = props.experts.filter(
      (expert) => expert.id.toString() === e.key.toString()
    );

    console.log(newExpert);
    props.setSelectedExpert(newExpert[0]);
  };

  const others = (
    <Menu onClick={handleMenuClick}>
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
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          View Here <DownOutlined />
        </a>
      </Dropdown>
    </div>
  );
};

export default SelectExpert;
