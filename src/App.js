import React from "react";
import Routes from "./routes";
import GlobalStyle from "./style/global";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AuthProvider } from "./hooks/auth";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <Routes />
        <GlobalStyle />
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
