import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import '../stylesheets/App.css';
import PostList from '../layouts/PostList'
import ManagePosts from '../layouts/ManagePosts'
import AddPost from './ManagePosts/addPost'
import EditPost from './ManagePosts/editPost'
import DeletePost from './ManagePosts/deletePost'
import PrimaryLayout from '../layouts/templates/PrimaryLayout'
import AccountLayout from '../layouts/templates/AccountLayout'
import Whoops404 from '../layouts/templates/Whoops404'

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" render={() => <PrimaryLayout><PostList/></PrimaryLayout>} />
            <Route path="/posts/manage" render={() => <AccountLayout><ManagePosts /></AccountLayout>} />
            <Route path="/posts/add" render={() => <AccountLayout><AddPost /></AccountLayout>} />
            <Route path="/posts/edit/:id" render={() => <AccountLayout><EditPost /></AccountLayout>} />
            <Route path="/posts/delete/:id" render={() => <AccountLayout><DeletePost /></AccountLayout>} />
            <Route component={Whoops404}/>
        </Switch>
    </BrowserRouter>
)

export default App;
