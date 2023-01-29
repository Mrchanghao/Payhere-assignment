import { useState } from "react";
import "./App.css";
import { Layout } from "./pages/Layout";
import { Routes } from "./pages/Routes";

function App() {
  return (
    <Layout>
      <Routes />
    </Layout>
  );
}

export default App;
