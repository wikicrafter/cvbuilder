import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/Utils/ErrorBoundary";

const App = () => {
  return (
    <ErrorBoundary>
      <Header />
      <Main />
      <Footer />
    </ErrorBoundary>
  );
};

export default App;
