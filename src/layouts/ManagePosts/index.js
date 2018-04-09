import React from 'react'
import { Link } from 'react-router-dom'
import Dropdown from '../../containers/PostList/dropdown'
import List from '../../containers/ManagePosts/list'

export default function ManagePosts() {
  return (
      <div>
        <main className="manage">
            <h1>Manage Posts</h1>
            <Link to="posts/add">Add a post</Link>
            <Dropdown />
            <List />
        </main>
    </div>
  );
}
