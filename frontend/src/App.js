import React from "react";
import "./App.css";
import Routes from "./router/Routes";
import MyAppBar from "./components/MyAppBar/MyAppBar";
import Footer from "./components/Footer/Footer";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme/theme";
import ToastBar from "./components/ToastBar/ToastBar";

function App() {
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <header>
          <MyAppBar />
        </header>
        <main>
          <Routes />
        </main>
        <ToastBar />
        <footer>
          <Footer />
        </footer>
      </ThemeProvider>
    </div>
  );
}

export default App;
