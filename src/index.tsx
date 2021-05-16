import "./style.css";

import React from "react";
import { render } from "react-dom";

const App = () => {
    return (
        <React.StrictMode>
            <div className="app"></div>
        </React.StrictMode>
    );
};

render(<App />, document.getElementById("root"));
