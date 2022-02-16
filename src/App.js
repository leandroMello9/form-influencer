import React from "react";
import Routes from "./routes";
import GlobalStyle from "./style/global";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes />
      <GlobalStyle />
      <Footer/>
    </>
  );
}

export default App;
