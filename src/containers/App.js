import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import '../stylesheets/app.css';
import Home from '../layouts/home'
import Posts from '../layouts/posts'
import AddPost from './posts/addPost'
import EditPost from './posts/editPost'
import DeletePost from './posts/deletePost'
import PrimaryLayout from '../layouts/templates/primary'
import AccountLayout from '../layouts/templates/account'
import Error404 from '../layouts/templates/error404'
import Links from '../links'

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path={Links.HOME} render={() => <PrimaryLayout><Home/></PrimaryLayout>} />
            <Route path={Links.MANAGE_POSTS} render={() => <AccountLayout><Posts /></AccountLayout>} />
            <Route path={Links.ADD_POST} render={() => <AccountLayout><AddPost /></AccountLayout>} />
            <Route path={`${Links.EDIT_POST}:id`} render={() => <AccountLayout><EditPost /></AccountLayout>} />
            <Route path={`${Links.DELETE_POST}:id`} render={() => <AccountLayout><DeletePost /></AccountLayout>} />
            <Route component={Error404}/>
        </Switch>
    </BrowserRouter>
)

export default App;
