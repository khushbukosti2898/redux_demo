const initialState = {
    react: 0,
    angular: 0,
    vue: 0,
    count: 0
}

const myReducer = (state = initialState, action) => {
    const newState = { ...state };

    /* if(action.type=== 'REACT_VOTE'){
        console.log("react")
        newState.react += 1;
    }

    if(action.type=== 'ANGULAR_VOTE'){
        console.log("angular")
        newState.angular += 1; 
    }

    if(action.type=== 'VUE_VOTE'){
        console.log("react")
        newState.vue += 1; 
    }

    return newState; */

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