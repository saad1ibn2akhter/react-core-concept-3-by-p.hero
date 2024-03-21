import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import SimpleForm from './assets/Components/SimpleForm/SimpleForm'
// import StatefulForm from './assets/Components/StatefulForm/StatefulForm'
import RefForm from './assets/Components/RefForm/RefForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <SimpleForm></SimpleForm> */}
        {/* <StatefulForm></StatefulForm> */}
        <RefForm></RefForm>
      </div>
    </>
  )
}

export default App
