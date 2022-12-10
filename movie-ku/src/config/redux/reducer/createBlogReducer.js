const initialState = {
    forms : {
        title : '',
        body : '',
        image :'',
    },
    imgPreview : null
}

const createBlogReducer = (state = initialState,action) => {
    if(action.type === 'SET_FORM_DATA') {
        return{
            ...state,
            forms  : {
                ...state.forms,
                [action.formsType] : action.formsValue
            } 
        }
    }
    if(action.type === 'SET_IMGPREVIEW') {
        return {
            ...state,
        imgPreview : action.payload
        }
    }
    return state;
}

export default createBlogReducer;