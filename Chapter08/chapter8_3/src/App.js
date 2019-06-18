import React, { useState } from 'react'

import examples from './examples'

const Example = ({ name, component }) => {
  const [ active, setActive ] = useState(true)

  function toggleActive () {
    setActive(!active)
  }

  return (
    <div>
      <hr />
      <h2>
        {name}{' '}
        <button onClick={toggleActive}>
          {active ? 'unmount' : 'mount'}
        </button>
      </h2>
      {active && React.createElement(component)}
      <br />
    </div>
  )
}

export default function App () {
  return (
    <div>
      <h1>React Hooks Examples</h1>
      {Object.entries(examples).map(([ name, component ]) =>
        <Example key={name} name={name} component={component} />
      )}
    </div>
  )
}
