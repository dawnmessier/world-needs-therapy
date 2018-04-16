import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.svg'
import Links from '../../links'

const AccountLayout = ({children}) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Account Panels</h1>
    </header>
    <Link to={Links.HOME}>Go to main page</Link>
    {children}
  </div>
)

export default AccountLayout
