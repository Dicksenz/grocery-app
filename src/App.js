import React, { useState } from "react";
import classes from "./styles.module.css";
import Layout from "../src/Layout/MainLayout";
import AddItems from "../src/components/AddItems/AddItems";
import BoughtItems from "./components/BoughtItems/BoughtItems";
import NumberOfItems from "./components/NumberOfItems/NumberOfItems";
const App = () => {
  const [items, setItems] = useState([]);
  const [itemChange, setItemChange] = useState("");
  const [boughtItems, setBoughtItems] = useState([]);
  const [disabled, setDisabled] = useState(true);

  const itemChangeHandler = value => {
    if (value) {
      setItemChange(value);
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  const addItemHandler = () => {
    setItems([...items, itemChange]);
  };
  const removeItemHandler = index => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };
  const boughtItemHandler = index => {
    setBoughtItems([...boughtItems, items[index]]);
    removeItemHandler(index);
  };
  return (
    <Layout>
      <div className={classes.Content}>
        <NumberOfItems bought={boughtItems} toBuy={items} />
        <AddItems
          itemChange={itemChangeHandler}
          add={addItemHandler}
          items={items}
          remove={removeItemHandler}
          boughtItem={boughtItemHandler}
          disabled={disabled}
        />
        <BoughtItems items={boughtItems} />
      </div>
    </Layout>
  );
};

export default App;
