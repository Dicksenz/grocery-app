import React from "react";
import Aux from "../../hoc/Auxiliary";
import { Card, Divider, Typography } from "antd";

const BoughtItems = props => {
  const { Text } = Typography;
  return (
    <Aux>
      <Card title="Bought" bordered={true} style={{ width: 350 }}>
        <ol>
          {props.items.map((value, index) => {
            return (
              <li key={index}>
                <Divider type="horizontal" />

                <Text>{value}</Text>
              </li>
            );
          })}
        </ol>
      </Card>
    </Aux>
  );
};

export default BoughtItems;
