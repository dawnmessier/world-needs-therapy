import React from 'react'
import { Link } from 'react-router-dom'

const DeletePost = ({onDelete=f=>f}) => {
    return (
        <div>
            <h2>Are you sure you want to delete this post? This action cannot be undone.</h2>
            <Link to="/managePosts">Cancel</Link>
            <button onClick={onDelete}>Delete</button>
        </div>
    )
}

export default DeletePost;
