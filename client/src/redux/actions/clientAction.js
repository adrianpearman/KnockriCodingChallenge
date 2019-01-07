import axios from 'axios'

export function getClientData() {
    return async (dispatch) => {
        dispatch()
        await axios.get('http://localhost:4000/applications')
                .then((applications) => [
                    console.log(applications)
                ])
                .catch((err) => {
                    return dispatch({ type: '', payload: err })
                })
    }
}