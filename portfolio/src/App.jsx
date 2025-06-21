import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { Navbar } from './components/Navbar'


function App() {

  return (
    <>
      <div className='grid grid-cols-11 gap-15 bg-gray-200 w-screen h-full py-20 px-6'>
        <div className="col-span-3 border border-blue-700"> 
          <Navbar/>
        </div>
        <div className="border border-red-700 col-span-8 ">
          
        </div>
      </div>
    </>
  )
}

export default App
