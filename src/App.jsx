import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import SimpleForm from './assets/Components/SimpleForm/SimpleForm'
import StatefulForm from './assets/Components/StatefulForm/StatefulForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <SimpleForm></SimpleForm> */}
        <StatefulForm></StatefulForm>
      </div>
    </>
  )
}

export default App
