import React from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";

import { Router } from "./routes";
import Loading from "./components/Loader";

function App() {
  return <RouterProvider router={Router()} fallbackElement={<Loading/>} />;
}

export default App;
