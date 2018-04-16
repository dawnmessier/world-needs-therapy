import React from 'react'
import { Link } from 'react-router-dom'
import Dropdown from '../../containers/topics/dropdown'
import List from '../../containers/posts/list'
import Links from '../../links'

export default function Posts() {
  return (
      <div>
        <main className="manage">
            <h1>Manage Posts</h1>
            <Link to={Links.ADD_POST}>Add a post</Link>
            <Dropdown />
            <List />
        </main>
    </div>
  );
}
