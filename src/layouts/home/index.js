import React from 'react'
import Dropdown from '../../containers/topics/dropdown'
import List from '../../containers/home/list'

export default function Home() {
  return (
      <div>
          <main className="posts">
            <Dropdown />
            <List />
        </main>
    </div>
  );
}
