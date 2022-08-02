// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // create state to keep track of input validation error
  const [error, setError] = React.useState(null)
  const inputRef = React.useRef(null)

  //handleChange function to validated user input
  //validate if input is lowercase
  //set error state if input is invalid
  const handleChange = event => {
    event.preventDefault()
    const value = event.target.value
    const isValid = value === value.toLowerCase()
    setError(isValid ? null : 'Username must be lower case')
  }

  const handleSubmit = event => {
    event.preventDefault()
    const value = inputRef.current.value
    onSubmitUsername(value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          id="usernameInput"
          type="text"
          ref={inputRef}
          onChange={handleChange}
        />
        {error && (
          <div style={{color: 'red'}} role="alert">
            input must be lowercase{' '}
          </div>
        )}
      </div>
      <button type="submit" disabled={error}>
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
