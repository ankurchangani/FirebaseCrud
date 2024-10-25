const initialState = {
    employees: [],
    loading: false,
};

const empReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_EMPLOYEES':
            return {
                ...state,
                employees: action.payload,
            };
        default:
            return state;
    }
};

export default empReducer;
