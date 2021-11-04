// useState: greeting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function Greeting({ initialName = '' }) {
  const [name, setName] = React.useState(initialName)
  const nameInputvalue = React.useRef()

  function handleChange() {
    setName(nameInputvalue.current.value)
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" ref={nameInputvalue} />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting initialName='xunda' />
}

export default App
