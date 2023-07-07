import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Table from './components/Table'
import Layout from './components/Grid_Folder/Layout'
import Input from './components/Grid_Folder/Input'

function App() {
  

  return (
    <div className=''>
      <Navbar gridNav=""/>
      <Layout/>
      <Input />
      <Footer gridFooter="mt-[100%] h-24"/>
    </div>
  )
}


export default App
