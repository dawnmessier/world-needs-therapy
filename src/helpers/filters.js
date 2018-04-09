import {visibilityFilters as FILTER} from '../store/constants'

export const filterPosts = (posts, filter) => {
    switch(filter) {
        case FILTER.DENIAL:
            return posts.filter(post => post.topicId === 0)
        case FILTER.SELF_ESTEEM:
            return posts.filter(post => post.topicId === 1)
        case FILTER.COMPLIANCE:
            return posts.filter(post => post.topicId === 2)
        case FILTER.CONTROL:
            return posts.filter(post => post.topicId === 3)
        case FILTER.AVOIDANCE:
            return posts.filter(post => post.topicId === 4)
        case FILTER.ANXIETY:
            return posts.filter(post => post.topicId === 5)
        case FILTER.DEPRESSION:
            return posts.filter(post => post.topicId === 6)
        default:
            return posts
    }
}
