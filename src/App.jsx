import React from "react";
import Reminder from "./Reminder";
import { render } from "react-dom";

const App = () => {
  return (
    <div>
      <Reminder />
    </div>
  );
};

render(<App />, document.getElementById("root"));
