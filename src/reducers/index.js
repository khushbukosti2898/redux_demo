const initialState = {
    react: 0,
    angular: 0,
    vue: 0,
    count: 0
}

const myReducer = (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case 'REACT_VOTE':
            newState.react += 1;
            return newState;
        case 'ANGULAR_VOTE':
            newState.angular += 1;
            return newState;
        case 'VUE_VOTE':
            newState.vue += 1;
            return newState;
        case 'INC':
            newState.count += 1;
            return newState;
        case 'DEC':
            newState.count -= 1;
            return newState;
        case 'RESET':
            newState.count = 0;
            return newState;
        default:
            return newState;
    }
}

export default myReducer;