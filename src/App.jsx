import React, { useState, useEffect } from 'react'
import Layout from './Layout/Layout'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Loader from './Components/Loader'

function App() {
  const [clone, setClone] = useState(false);
  const [loading, setLoading] = useState(true);

  const toggleClone = () => {
    setClone(!clone);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className='w-full'>
      <Header toggleClone={toggleClone} />
      <Layout clone={clone} setClone={setClone} toggleClone={toggleClone} />
      <Footer />
    </div>
  )
}

export default App
