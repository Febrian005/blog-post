import axios from "axios"

export const setForm = (formsType,formsValue) => {
    return {type : 'SET_FORM_DATA',formsType,formsValue}
}

export const setImagePreview = (payload) => {
    return {type : 'SET_IMGPREVIEW',payload}
}

export const PostApi = (forms) => {
     
    const form = new FormData();
    form.append('title',forms.title);
    form.append('body',forms.body);
    form.append('images',forms.image);


    console.log('mydata',form);

    axios.post('http://localhost:4000/v1/blog/create-blog',form , {
      headers : {
         'Content-Type': 'multipart/form-data'
        }
    }).then(result=>{
      console.log('post succers',result);
    }).catch(err=>{
      console.log('err',err);
    })
}

export const UpdateToApi = (forms,id) => {
    const form = new FormData();
    form.append('title',forms.title);
    form.append('body',forms.body);
    form.append('images',forms.image);


    console.log('mydata',form);

    axios.put(`http://localhost:4000/v1/blog/create-blogs/${id}`,form , {
      headers : {
         'Content-Type': 'multipart/form-data'
        }
    }).then(result=>{
      console.log('update succers',result);
    }).catch(err=>{
      console.log('err',err);
    })
}