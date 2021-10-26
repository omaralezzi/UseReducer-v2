export const reducerCount = (state, {type, payload}) => {
    switch(type) {
        case 'INCREMENT':
            return state + payload
        case 'DECREMENT':
            return state - payload
        case 'RESET':
            return state = payload
            default:
                return state
    }
}