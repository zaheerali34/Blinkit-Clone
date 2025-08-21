import React from 'react';
import Topbar from '../Components/Topbar';
import Category from '../Components/Category';
import Dairy from '../Components/Dairy';
import Rolling from '../Components/Rolling';
import Hookah from '../Components/Hookah';
import ColdDrinks from '../Components/ColdDrinks';
import ItemsAdd from '../Components/ItemsAdd';

function Home({ clone, setClone, toggleClone }) {
  return (
    <>
        <Topbar />
        <Category />
        <Dairy />
        <Rolling />
        <Hookah />
        <ColdDrinks />
        <ItemsAdd clone={clone} setClone={setClone} toggleClone={toggleClone} />
    </>
  )
}

export default Home