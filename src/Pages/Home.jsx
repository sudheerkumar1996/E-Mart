import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import CardCompo from "../components/CardCompo";
import Data from "../Assests/data.json";
import InputCompo from "../components/InputComponent";
const HomePage = (props) => {
  let { list, updateProduct } = props;
  const [items, setItems] = useState(list);
  const [value, setValue] = useState("");

  useEffect(() => {
    let updateItems = list.filter((item) =>
      items.map((f) => f.id).includes(item.id)
    );
    if (updateItems.length === 0) {
      setItems(list);
    } else {
      setValue("")
      setItems(updateItems);
    }
    
  }, [list]);

  const searchProduct = (val) => {
    setValue(val);
    setItems([
      ...list.filter((item) =>
        item.name.toLowerCase().includes(val.toLowerCase())
      ),
    ]);
  };

  const onBuyProduct = (row) => {
    // setItems(
    //   items.map((item) =>
    //     item.id === row.id
    //       ? {
    //           ...row,
    //         }
    //       : item
    //   )
    // );
    updateProduct(
      list.map((item) =>
        item.id === row.id
          ? {
              ...row,
            }
          : item
      )
    );
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}  >
        <div style={{ marginTop: "8%" }}>
          <InputCompo value={value} handleChange={searchProduct} />
        </div>
      </Grid>
      {items.map((item, index) => (
        <Grid key={index} item md={3}>
          <CardCompo onBuyProduct={onBuyProduct} row={item} />
        </Grid>
      ))}
    </Grid>
  );
};
export default HomePage;
