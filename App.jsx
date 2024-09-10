import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '.assets/vite.svg'
import CallToAction from 'assets./CallToAction';
import './App.css'

function App() {

  return (
    <>
      <div>
        <h1>Computador y celulares</h1>
        <h2>Accesories</h2>
        <p></p>
      </div>
      <div>
      <NavigationBar />
      <PageBody />
      <CallToAction />
    </div>
    </>
  )
}

export default App
