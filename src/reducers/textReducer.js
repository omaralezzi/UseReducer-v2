export const textReducer = (state, {type, payload}) => {
    switch(type) {
        case 'GRAB':
            return state = payload
        case 'RESET':
            return state = ''
        default: 
            return state
    }
}