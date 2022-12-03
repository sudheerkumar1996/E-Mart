import React, { useState } from "react";
import "./App.css";
import HomePage from "./Pages/Home";
import { Container } from "@material-ui/core";
import NavCompo from "./components/NavCompo";
import Data from "./Assests/data.json";
function App() {
  const [list, updateList] = useState(Data);
  const updateProduct = (arr) => {
    updateList(arr);
  };
  return (
    <div>
      <NavCompo selectedData={list} updateProduct={updateProduct} />
      <Container>
        <HomePage list={list} updateProduct={updateProduct} />
      </Container>
    </div>
  );
}

export default App;
