import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.svg'
import Links from '../../links'

const PrimaryLayout = ({children}) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Main website</h1>
    </header>
    <Link to={Links.MANAGE_POSTS}>Manage posts</Link>
    {children}
  </div>
)

export default PrimaryLayout
