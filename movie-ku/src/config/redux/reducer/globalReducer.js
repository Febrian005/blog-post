const initialState = {
    name : 'buyung febrian'
}
const globalReducer = (state = initialState,action) => {
    if(action.type === 'UPDATE_NAME'){
        return {
            ...state,
            name : 'rahmat fajar'
        }
    }
    return state;
}

export default globalReducer;