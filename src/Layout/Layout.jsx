import React from 'react'
import Home from '../Page/Home'

function Layout({ clone, setClone, toggleClone }) {
  return (
    <div className='w-full h-full'>
      <Home clone={clone} setClone={setClone} toggleClone={toggleClone}/>
    </div>
  )
}

export default Layout