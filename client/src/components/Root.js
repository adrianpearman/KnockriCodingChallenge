import React from 'react'
import { ReactReduxContext } from 'react-redux'
import PropTypes from 'prop-types'
import CandidateList from './CandidateList'

const Root = ({ store }) => {
    return(
        <ReactReduxContext.Consumer>
            {(store) => <CandidateList context={store}/>}
        </ReactReduxContext.Consumer>
    )
}

// Root.propTypes = {
//     store: PropTypes.object.isRequired
// }

export default Root