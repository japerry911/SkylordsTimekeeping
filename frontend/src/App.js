import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Routes from "./router/Routes";
import MyAppBar from "./components/MyAppBar/MyAppBar";

function App() {
  return (
    <div>
      <header>
        <MyAppBar />
      </header>
      <main>
        <Routes />
      </main>
    </div>
  );
}

export default App;
