import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import SimpleForm from './assets/Components/SimpleForm/SimpleForm'
// import StatefulForm from './assets/Components/StatefulForm/StatefulForm'
// import RefForm from './assets/Components/RefForm/RefForm'
import ReusableForm from './assets/Components/ReusableForm/ReusableForm'

function App() {
  const [count, setCount] = useState(0)

  const handleSignUpEvent = (data) => {
    // e.preventDefault();
    console.log('sign ip data ,' ,data);
  }
  const handleUpdateProfileEvent = (data) => {
    // e.preventDefault();
    console.log('updated profile datas  ,' , data);
  }
  return (
    <>
      <div>
        {/* <SimpleForm></SimpleForm> */}
        {/* <StatefulForm></StatefulForm> */}
        {/* <RefForm></RefForm> */}
        <ReusableForm
          formTitle={"Sign Up"}
          handleEvent={handleSignUpEvent}
        ></ReusableForm>
        <ReusableForm formTitle={"Profile Update"}
          submitBtnText='update profile'
          handleEvent={handleUpdateProfileEvent}></ReusableForm>

      </div>
    </>
  )
}

export default App
