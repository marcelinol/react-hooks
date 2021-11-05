// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'

function Greeting({initialName = ''}) {
  const localStorageKey = 'name'
  const defineInitialName = () => window.localStorage.getItem(localStorageKey) || initialName
  const [name, setName] = React.useState(defineInitialName)

  React.useEffect(() => {
    window.localStorage.setItem(localStorageKey, name)
  }, [name])

  function handleChange(event) {
    setName(event.target.value)
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting />
}

export default App
