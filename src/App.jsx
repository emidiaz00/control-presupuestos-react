import { useState } from 'react'
import Header from '../components/header'



function App() {

  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  
  return (
   <div>
     <Header
     presupuesto={presupuesto}
     setPresupuesto={setPresupuesto}
     isValidPresupuesto={isValidPresupuesto}
     setisValidPresupuesto={setIsValidPresupuesto}
     />
     
   </div>
  )
}

export default App
