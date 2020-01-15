import React from "react";
import { Card, Divider } from "antd";

const NumberOfItems = props => {
  return (
    <Card title="" bordered={true} style={{ width: 350 }}>
      <p style={{ color: "green" }}>
        Number of items bought : <strong>{props.bought.length}</strong>
      </p>
      <Divider type="horizontal" />
      <p style={{ color: "red" }}>
        Number of items to buy : <strong>{props.toBuy.length}</strong>
      </p>
    </Card>
  );
};

export default NumberOfItems;
