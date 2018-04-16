import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Links from '../../links'

export default class List extends Component {
    componentDidMount(){
        this.props.fetchPostsIfNeeded()
    }

    render(){
        let posts = this.props.posts
        let postList = posts.items

        if (posts.isFetching) {
          return <p>Loading...</p>
        }

        const hasPosts = postList !== undefined && postList.length > 0

        let items = postList.map((post, i) =>
            <tr key={i} index={i}><td>{post.title}</td><td>{post.contentType}</td><td>{post.createdAt}</td><td>{post.updatedAt}</td><td>{post.topicId}</td><td><Link to={`${Links.EDIT_POST}${post.id}`}>Edit</Link></td><td><Link to={`${Links.DELETE_POST}${post.id}`}>Delete</Link></td><td>{post.statusId} <button onClick={() => console.log("published")}>Publish</button></td></tr>
        )

        return (
            <div>
            { hasPosts ?
                (
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Type</th>
                                <th>Date Created</th>
                                <th>Date Updated</th>
                                <th>Topic</th>
                                <th>Edit</th>
                                <th>Delete</th>
                                <th>Published?</th>
                            </tr>
                        </thead>
                        <tbody>
                        {items}
                        </tbody>
                    </table>
                ) :
                (<p>There are no posts for your query.</p>)
            }

            </div>
        )
    }
}
