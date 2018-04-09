import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.svg'

const AccountLayout = ({children}) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">404 Error page</h1>
    </header>
    <h3>Whoops! You tried to access a page that does not exist.</h3>
    <Link to={"/"}>Go back to the main page</Link>
    {children}
  </div>
)

export default AccountLayout
