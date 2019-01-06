import React from 'react'
import { Link } from 'react-router-dom'

// Created a reuseable component for showing each candidate
const Candidate = (props) => {
    let candidateStyle = {
        width: '80%',
        marginLeft: '10%',
        marginRight: '10%',
    }
    return (
        <div
            className="card bg-secondary mb-3"
            style={candidateStyle}
        >
            <div className="card-header">Candidate:</div>
            <div className="card-body">
                <Link to={{
                    pathname: `/candidate/${props.id}`,
                    state: { ...props }
                }}>
                    <h2>{props.name}</h2>
                </Link>
            </div>
        </div>
    )
}

export default Candidate