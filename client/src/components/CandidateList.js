// NPM MODULES
import React, { Component } from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import { connect, Provider } from 'react-redux'
import axios from 'axios'

// COMPONENTS
import Candidate from './Candidate'
import Header from './Header'
import ErrorComponent from './ErrorComponent'
import CandidateDetails from './CandidateDetails'

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
            <Router>
                <Switch>
                    <Header />
                    <Route path='/' exact render={() => Candidates} />
                    <Route path='/candidate/:id' component={CandidateDetails} />                    
                    <Route path='*' component={ErrorComponent} />
                </Switch>
            </Router>
        )
    }
}

export default CandidateList
