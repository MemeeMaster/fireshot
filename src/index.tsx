import React from "react";
import * as ReactDOM from "react-dom/client";
import Root from "./views/Root/Root";
import Profile from "./views/Profile/Profile";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLDivElement
);

root.render(<Root />);
