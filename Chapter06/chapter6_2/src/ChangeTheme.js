import React, { useEffect, useState } from 'react'

function ThemeItem ({ theme, active, onClick }) {
  return (
    <span onClick={onClick} style={{ cursor: 'pointer', paddingLeft: 8, fontWeight: active ? 'bold' : 'normal' }}>
      <span style={{ color: theme.primaryColor }}>Primary</span> / <span style={{ color: theme.secondaryColor }}>Secondary</span>
    </span>
  )
}

export default function ChangeTheme ({ theme, setTheme }) {
  const [ themes, setThemes ] = useState([])

  useEffect(() => {
    fetch('/api/themes')
      .then(result => result.json())
      .then(posts => setThemes(posts))
  }, [])

  function isActive (t) {
    return t.primaryColor === theme.primaryColor && t.secondaryColor === theme.secondaryColor
  }

  return (
    <div>
      Change theme:
      {themes.map((t, i) =>
        <ThemeItem key={'theme-' + i} theme={t} active={isActive(t)} onClick={() => setTheme(t)} />
      )}
    </div>
  )
}
