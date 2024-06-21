import { useState } from 'react'
import Bar from './components/navbar/Bar'
import './App.css'
import Footer from './components/footer/Footer'
import 'antd/dist/reset.css'; // Importa el CSS de Ant Design

        

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
     <Bar/>
     <Footer/>
    </>
  )
}

export default App
