// MODULES
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

// COMPONENTS
import Header from './components/Header'
import CandidateList from './components/CandidateList'
import CandidateDetails from './components/CandidateDetails'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route path='/' component={CandidateList} exact />
          <Route path='/candidate/:id' component={CandidateDetails} />
        </div>
      </Router>
    )
  }
}

export default App;
