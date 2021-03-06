import React from 'react'
import { Link } from 'react-router-dom'
import Form from './form'
import Links from '../../links'

const AddPost = ({topics, onSubmit = f => f}) => {
    return (
        <div>
            <Link to={Links.MANAGE_POSTS}>Back to list of posts</Link>
            <Form topics={topics} onSubmit={onSubmit} />
        </div>
    )
}

export default AddPost;
