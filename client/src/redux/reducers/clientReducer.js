export default function reducer(state = {
        fetching: false,
        fetched: false,
        clientDetails: [],
        error: null,
    }, action){
    switch(action.type) {
        case 'FETCH_CLIENT': {
            return { ...state, fetching: true}
        }
        case 'RECEIVED_INFORMATION': {
            return { 
                ...state, 
                fetching: false, 
                fetched: true, 
                clientDetails: action.payload 
            }
        }
        case 'ERROR': {
            return {
                ...state, 
                fetching: false,
                fetched: true,
                error: true }
        }
        default: return state
    }
}