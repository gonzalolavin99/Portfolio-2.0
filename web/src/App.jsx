import { useState } from 'react'
import './App.css'
import Bar from './components/navbar/Bar'
import Dashboard from './components/dashboard/Dashboard';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import 'antd/dist/reset.css';

function App() {
  return (
    <>
      <Bar/>
      <Dashboard id="about-me"/>
      <div id="projects">
        <Projects/>
      </div>
      <div id="contact">
        <Contact/>
      </div>
      <Footer/>
    </>
  )
}

export default App