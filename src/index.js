import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import "swiper/css/bundle";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
