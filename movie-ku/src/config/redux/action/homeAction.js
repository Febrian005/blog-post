import axios from "axios"

export const setDataBlog = (page) => (dispatch) => {
    axios.get(`http://localhost:4000/v1/blog/create-blogs?page=${page}&perPage=2`)
    .then(result => {
        const responseAPi = result.data;
        dispatch({type : 'UPDATE_DATA_BLOG',payload :responseAPi.data})
        dispatch({
            type : 'UPDATE_PAGE',
            payload :{
                currentPage : responseAPi.current_page,
                totalPage : Math.ceil(responseAPi.total_data / responseAPi.per_page) 
            }})
    })
    .catch(err =>{
        console.log(err);
    })
}