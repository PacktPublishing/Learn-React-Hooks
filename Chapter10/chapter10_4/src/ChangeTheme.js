import React, { useEffect } from 'react'
import { useAPIThemes } from './hooks'

function ThemeItem ({ theme, active, onClick }) {
  return (
    <span onClick={onClick} style={{ cursor: 'pointer', paddingLeft: 8, fontWeight: active ? 'bold' : 'normal' }}>
      <span style={{ color: theme.primaryColor }}>Primary</span> / <span style={{ color: theme.secondaryColor }}>Secondary</span>
    </span>
  )
}

export default function ChangeTheme ({ theme, setTheme }) {
  const [ themes, getThemes ] = useAPIThemes()
  const { data, isLoading } = themes

  useEffect(getThemes, [])

  function isActive (t) {
    return t.primaryColor === theme.primaryColor && t.secondaryColor === theme.secondaryColor
  }

  return (
    <div>
      Change theme:
      {isLoading && ' Loading themes...'}
      {data && data.map((t, i) =>
        <ThemeItem key={'theme-' + i} theme={t} active={isActive(t)} onClick={() => setTheme(t)} />
      )}
    </div>
  )
}
