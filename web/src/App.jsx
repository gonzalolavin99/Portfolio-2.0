import { useState } from 'react'
import Bar from './components/navbar/Bar'
import './App.css'
import Footer from './components/footer/Footer'
import 'antd/dist/reset.css'; // Importa el CSS de Ant Design
import Dashboard from './components/footer/dashboard/Dashboard';


        

function App() {

  return (
    <>
   
    <Bar/>
    <Dashboard/>
    <Footer/>
    </>
  )
}

export default App
