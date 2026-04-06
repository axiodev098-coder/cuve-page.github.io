import React from "react";
import Home from "./routes/Home";
import Button from "./components/Social";
const App = () => {
  return (
    <div className="container-fluid p-4 ">
      <Home />
      <div className="fixed-bottom d-flex justify-content-end p-3">
      <Button />
      </div>
      
    </div>
  );
};

export default App;
