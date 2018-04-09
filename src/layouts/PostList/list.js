import React, {Component} from 'react'

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

        return (
            <div>
                { hasPosts ?
                    postList.map((post, i) => {
                        if(post.statusId === 1) {
                            return <article key={i}><h2>{post.title}</h2><span>{post.createdAt}</span>{!post.anonymous ? (<cite>{post.author}</cite>) : ''}<div dangerouslySetInnerHTML={{ __html: post.content }} /></article>
                        } else {
                            return true
                        }
                    }
                    ) : (<p>There are no posts for your query.</p>)
                }
            </div>
        )
    }
}
