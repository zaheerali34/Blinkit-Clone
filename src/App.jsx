import React, { useState, useEffect } from "react";
import Layout from "./Layout/Layout";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function App() {
  const [clone, setClone] = useState(false);

  const toggleClone = () => {
    setClone(!clone);
  };

  return (
    <div className="w-full">
      <Header toggleClone={toggleClone} />
      <Layout clone={clone} setClone={setClone} toggleClone={toggleClone} />
      <Footer />
    </div>
  );
}

export default App;
