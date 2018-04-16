import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.svg'
import Links from '../../links'

const Error404 = ({children}) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">404 Error page</h1>
    </header>
    <h3>Whoops! You tried to access a page that does not exist.</h3>
    <Link to={Links.HOME}>Go back to the main page</Link>
    {children}
  </div>
)

export default Error404
