import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ShortenUrl from './components/ShortenUrl'

function App() {

  return (
    <>
    <div className="bg-black w-screen h-screen flex justify-center items-center overflow-hidden">
      <h1 className="floating-heading absolute text-[12rem] md:text-[18rem] md:rotate-0 rotate-90">CroppD</h1>
       <div className="relative z-10">
          <ShortenUrl />
      </div>
    </div>
    </>
  )
}

export default App
