import React from 'react'

const Form = (props) => {
    let items = props.topics.items.map((topic, i) =>
        <option key={i+1} value={topic.id}>{topic.topic}</option>
    )

    let _title, _author, _topicId, _anonymous, _contentType, _content, _statusId

    const handleSubmit = (e) => {
        e.preventDefault()

        //TODO: pass postId when updating post
        props.onSubmit({
            title: _title.value,
            author: _author.value,
            topicId: _topicId.value,
            anonymous: !_anonymous.value,
            contentType: _contentType.value,
            content: _content.value,
            statusId: _statusId.value
        })

        _title = ''
        _author = ''
        _topicId = ''
        _anonymous = ''
        _contentType = ''
        _content = ''
    }

    return (
        <div>
            <form method="post" onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td><label htmlFor="title">Title</label></td>
                            <td><input ref={input => _title = input} id="title" type="text" required /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="author">Author</label></td>
                            <td><input ref={input => _author = input} id="author" type="text" value="username" placeholder="username" disabled /></td>
                        </tr>
                        <tr>
                            <td colSpan="2">OR Check <input ref={checkbox => _anonymous = checkbox} type="checkbox" name="anonymous" value="true" /> if you want to keep yourself anonymous</td>
                        </tr>
                        <tr>
                            <td><label htmlFor="topic">Choose topic for this post</label></td>
                            <td>
                                <select ref={select => _topicId = select} name="topicId" id="topic" required>
                                <option key="0">None</option>
                                {items}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="contentType">Content type</label></td>
                            <td>
                                <select ref={select => _contentType = select} name="contentType" id="contentType">
                                    <option value="text">Text</option>
                                    <option value="html">HTML</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="content">Content</label></td>
                            <td><textarea ref={textarea => _content = textarea} id="content" name="content" required /></td>
                        </tr>
                        <tr><td colSpan="2"><input type="submit" value="Submit" /></td></tr>
                    </tbody>
                </table>
                <input ref={input => _statusId = input} type="hidden" name="statusId" />
            </form>
        </div>
    )
}

export default Form;
