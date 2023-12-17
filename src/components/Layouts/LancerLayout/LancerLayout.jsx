import React from 'react'

function LancerLayout({ children }) {
  return (
    <>
      <h1> Header Lancer</h1>

      {children}

      <h1>Footer Lancer</h1>
    </>
  )
}

export default LancerLayout