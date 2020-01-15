import React from "react";
import { Button, Divider, Typography } from "antd";

const ListItems = props => {
  const { Text } = Typography;

  return (
    <>
      <ol>
        {props.items.map((value, index) => {
          return (
            <li key={index}>
              <Divider type="horizontal" />
              <Button
                type="danger"
                size="small"
                icon="delete"
                onClick={() => props.remove(index)}
              />
              <Divider type="vertical" />

              <Button
                type="primary"
                size="small"
                icon="check"
                onClick={() => props.boughtItem(index)}
              />
              <Divider type="vertical" />

              <Text>{value}</Text>
            </li>
          );
        })}
      </ol>
    </>
  );
};

export default ListItems;
