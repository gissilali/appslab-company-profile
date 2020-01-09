import React from "react"

const CurrentSectionStateContext = React.createContext()
const CurrentSectionDispatchContext = React.createContext()

function currentSectionReducer(state, action) {
  return "#"
}

function CurrentSectionProvider({ children }) {
  const [state, dispatch] = React.useReducer(currentSectionReducer, {

  })

  return (
    <CurrentSectionStateContext value={state}>
      <CurrentSectionDispatchContext.Provider value={dispatch}>
        {children}
      </CurrentSectionDispatchContext.Provider>
    </CurrentSectionStateContext>
  )
}

function useCurrentSectionState() {
    const context = React.useContext(CurrentSectionStateContext)
    if (context === undefined) {
      throw new Error('useCurrentSectionState must be used within a CurrentSectionProvider')
    }
    return context
  }
  function useCurrentSectionDispatch() {
    const context = React.useContext(CurrentSectionDispatchContext)
    if (context === undefined) {
      throw new Error('useCurrentSectionDispatch must be used within a CurrentSectionProvider')
    }
    return context
  }

export { CurrentSectionProvider, useCurrentSectionDispatch, useCurrentSectionState }
