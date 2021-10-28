import "./App.css";
import React, { useState } from "react";
import DisplayBox from "./components/DisplayBox";
import Box from "./components/Box";
const appStyle = {
  width: "70%",
  margin: "50px auto",
  textAlign: "center",
};
function App() {
  const [boxArr, setBoxArr] = useState([]);

  console.log(boxArr, " this is boxArr");
  return (
    <div style={appStyle}>
      <Box boxArr={boxArr} setBoxArr={setBoxArr} />
      <DisplayBox boxArr={boxArr} />
    </div>
  );
}

export default App;
