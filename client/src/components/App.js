import  { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../redux/actions/clientAction'
import Root from './Root'

function mapStateToProps(state){
    return{
        clientDetails: state.clientDetails
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(actionCreators, dispatch)
}

const App = connect(mapStateToProps, mapDispatchToProps)(Root)

export default App