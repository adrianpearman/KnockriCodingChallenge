import React from 'react'

import Comment from './Comment'

const CommentList = (props) => {
    let commentList = props.comments.map((comment, index) => {
        return <Comment key={index} comment={comment} />
    })

    return(
        <div>
            <h2>Comments</h2>
            {props.comments.length > 0 ? commentList : <p>No comments have been posted yet.</p>}
        </div>
    )
}

export default CommentList