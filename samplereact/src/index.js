import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Header from "./components/Header";
import Footer from "./components/Footer";
const rootElement = document.getElementById("root");

const root = createRoot(rootElement);
root.render(
<StrictMode>
  <BrowserRouter>

    <App/>
 

  </BrowserRouter>
</StrictMode>
);