import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import logo from '../images/logo.svg';
import '../stylesheets/App.css';
import PostList from '../layouts/PostList'
import ManagePosts from '../layouts/ManagePosts'
import AddPost from './ManagePosts/addPost'
import EditPost from './ManagePosts/editPost'
import DeletePost from './ManagePosts/deletePost'

const PrimaryLayout = ({children}) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Main website</h1>
    </header>
    {children}
  </div>
)

const AccountLayout = ({children}) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Account Panels</h1>
    </header>
    {children}
  </div>
)

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" render={() => <PrimaryLayout><PostList/></PrimaryLayout>} />
            <Route path="/managePosts" render={() => <AccountLayout><ManagePosts /></AccountLayout>} />
            <Route path="/posts/add" render={() => <AccountLayout><AddPost /></AccountLayout>} />
            <Route path="/posts/edit/:id" render={() => <AccountLayout><EditPost /></AccountLayout>} />
            <Route path="/posts/delete/:id" render={() => <AccountLayout><DeletePost /></AccountLayout>} />
        </Switch>
    </BrowserRouter>
)

export default App;
