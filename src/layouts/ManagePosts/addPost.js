import React from 'react'
import { Link } from 'react-router-dom'
import Form from './form'

const AddPost = ({topics, onSubmit = f => f}) => {
    return (
        <div>
            <Link to="/managePosts">Back to list of posts</Link>
            <Form topics={topics} onSubmit={onSubmit} />
        </div>
    )
}

export default AddPost;
