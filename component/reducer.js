export const Reducer = (state, action) =>{    
    switch (action.type) {
        case 'INCREMENT':
            return {count: state.count + action.payload}
        case 'DECREMENT':
            return {count: state.count - action.payload}
        default:
            throw new Error('Invalid argument passed to Reducer function')
    }
}