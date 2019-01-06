// NPM MODULES
import React, { Component } from 'react'
import axios from 'axios'

// COMPONENTS
import Candidate from './Candidate'

class CandidateList extends Component {
    state = {
        candidates: []
    }

    componentDidMount() {
        // reaching to api to grab list of candidates
        axios.get('http://localhost:4000/candidates')
            .then((candidates) => {
                let candidateList = candidates.data
                console.log(candidateList)
                this.setState({ candidates: candidateList })
            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        // rendering the list of candidates with the reuseable component.
        const Candidates = this.state.candidates.map((candidate, index) => {
            return (
                <Candidate
                    key={index}
                    id={candidate.id}
                    name={candidate.name}
                    applicationId={candidate.applicationId}
                />
            )
        })
        return (
            <div className='mt-4'>
                {Candidates}
            </div>
        )
    }
}

export default CandidateList