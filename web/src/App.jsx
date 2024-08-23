import { useState } from 'react'
import './App.css'
import Bar from './components/navbar/Bar'
import Dashboard from './components/footer/dashboard/Dashboard';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer'
import 'antd/dist/reset.css'; // Importa el CSS de Ant Design


        

function App() {

  return (
    <>
   
    <Bar/>
    <Dashboard/>
    <Projects/>
    <Footer/>
    </>
  )
}

export default App
