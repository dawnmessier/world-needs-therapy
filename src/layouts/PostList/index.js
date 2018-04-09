import React from 'react'
import Dropdown from '../../containers/PostList/dropdown'
import List from '../../containers/PostList/list'

export default function PostList() {
  return (
      <div>
          <main className="posts">
            <Dropdown />
            <List />
        </main>
    </div>
  );
}
