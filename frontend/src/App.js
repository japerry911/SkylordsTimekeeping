import React from "react";
import "./App.css";
import Routes from "./router/Routes";
import MyAppBar from "./components/MyAppBar/MyAppBar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <header>
        <MyAppBar />
      </header>
      <main>
        <Routes />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
