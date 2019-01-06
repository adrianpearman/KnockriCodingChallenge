import React from 'react'
import { Link } from 'react-router-dom'

const MessageContainer = (props) => {
    return (
        <div className="alert alert-dismissible alert-warning">
            <h4 className="alert-heading">{props.name}</h4>
            <p className="mb-0">
                Currently has no videos available. <Link to='/'>Back to Candidates</Link>
            </p>
        </div>
    )
}

export default MessageContainer