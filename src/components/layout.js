import * as React from 'react'
import "./layout.css"

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout