const reducerName = (state = { 
    message: "Hello" },
    action) => {
        switch (action.type) { 
            case 'BIRTHDAY':
                return Object.assign({}, action);
            case 'VALENTINESDAY': 
                return  {...action};
            default: 
                return state 
    }
}

export default reducerName