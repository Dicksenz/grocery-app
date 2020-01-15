import React from "react";
import Aux from "../../hoc/Auxiliary";
import { Input, Button, Card } from "antd";
import ListItems from "../ListItems/ListItems";
import Message from "../Validation/CheckEmpty";

const AddItems = props => {
  return (
    <Aux>
      <Card title="To buy" bordered={true} style={{ width: 350 }}>
        <Message itemLength={props.items} />

        <div style={{ display: "flex" }}>
          <Input
            placeholder="Enter items to buy"
            onChange={event => props.itemChange(event.target.value)}
          />
          <Button
            type="primary"
            disabled={props.disabled}
            onClick={() => props.add()}
          >
            Add
          </Button>
        </div>
        <ListItems
          items={props.items}
          remove={props.remove}
          boughtItem={props.boughtItem}
        />
      </Card>
    </Aux>
  );
};

export default AddItems;
