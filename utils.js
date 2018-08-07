import React from 'react'

export const createNamedContext = (name, defaultValue) => {
  const Ctx = React.createContext(defaultValue)
  Ctx.Consumer.displayName = `${name}.Consumer`
  Ctx.Provider.displayName = `${name}.Provider`
  return Ctx
}
