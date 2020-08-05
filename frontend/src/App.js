import React, { useState, useEffect } from "react";
import "./App.css";
import Routes from "./router/Routes";
import MyAppBar from "./components/MyAppBar/MyAppBar";
import Footer from "./components/Footer/Footer";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme/theme";
import ToastBar from "./components/ToastBar/ToastBar";
import LoadingOverlay from "react-loading-overlay";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const imgs = [
      "https://skylord-timekeeping492193924349324.s3.us-east-2.amazonaws.com/About/jf-brou-915UJQaxtrk-unsplash+(2).jpg",
      "https://skylord-timekeeping492193924349324.s3.us-east-2.amazonaws.com/Logos/logo_transparent_background.png",
      "https://skylord-timekeeping492193924349324.s3.us-east-2.amazonaws.com/Clocking/sonja-langford-eIkbSc3SDtI-unsplash.jpg",
      "https://skylord-timekeeping492193924349324.s3.us-east-2.amazonaws.com/Contact/emerson-peters-oBCT3obZ6OY-unsplash+(1).jpg",
      "https://skylord-timekeeping492193924349324.s3.us-east-2.amazonaws.com/CreateAccount/joe-caione-qO-PIF84Vxg-unsplash+(1).jpg",
      "https://skylord-timekeeping492193924349324.s3.us-east-2.amazonaws.com/History/pexels-lukas-590022.jpg",
      "https://skylord-timekeeping492193924349324.s3.us-east-2.amazonaws.com/Home/amanda-jones-CcIIao_-Eow-unsplash.jpg",
      "https://skylord-timekeeping492193924349324.s3.us-east-2.amazonaws.com/NotFound/nicole-wilcox-zAWs-hKChYA-unsplash.jpg",
      "https://skylord-timekeeping492193924349324.s3.us-east-2.amazonaws.com/SignIn/anoir-chafik-2_3c4dIFYFU-unsplash.jpg",
      "https://skylord-timekeeping492193924349324.s3.us-east-2.amazonaws.com/Upload/new-data-services-bbXaYbKWnjw-unsplash.jpg",
      "https://skylord-timekeeping492193924349324.s3.us-east-2.amazonaws.com/Welcome/kevin-noble-gA3Qd2tquMc-unsplash.jpg",
    ];

    cacheImages(imgs);
  });

  const cacheImages = (srcArray) => {
    srcArray.forEach((src) => {
      new Promise(function (resolve, reject) {
        const img = new Image();

        img.src = src;
        img.onload = resolve();
        img.onerror = reject();
      });
    });

    setIsLoading(false);
  };

  return (
    <LoadingOverlay
      active={isLoading}
      text="Loading..."
      spinner
      styles={{ wrapper: { height: "100%", width: "100%" } }}
    >
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
    </LoadingOverlay>
  );
};

export default App;
