
import { Button, Gap, Input, Link, TextArea, Upload } from '../../component'
import './CreateBlog.scss'
import { useHistory, withRouter } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { PostApi, setForm, setImagePreview, UpdateToApi } from '../../config/redux/action/createBlogAction'
import { useEffect, useState } from 'react'

const CreateBlog = (props) => {
  const {forms,imgPreview} = useSelector(state => state.createBlogReducer);
  const {title,body} = forms;
  const [isUpdate,setIsUpdate] = useState(false);
  const dispatch = useDispatch()


  // const [title,setTitle] = useState('');
  // const [body,setBody] = useState('');
  // const [images,setImage] = useState('');
  // const [imagePreview,setImagePreview] = useState('');
  const history = useHistory();

  useEffect(()=>{
   
    console.log('parameter',props);
    const id = props.match.params.id;
    if(id){
      setIsUpdate(true);
      axios.get(`http://localhost:4000/v1/blog/create-blogs/${id}`)
      .then(res => {
        const data = res.data.data;
        console.log('ini res :',data);
        dispatch(setForm('title',data.title));
        dispatch(setForm('body',data.body));
        dispatch(setImagePreview(`http://localhost:4000/${data.image}`));
      })
      .catch(err => {
        console.log('error :',err);
      })
    }
  },[props,dispatch])

  const onUploadImage = (e) => {
    const file = e.target.files[0];
    const datas = URL.createObjectURL(file);
    dispatch(setForm('image',file))
    dispatch(setImagePreview(datas))
    console.log('ini file uploaded', file);
    
  }

  const onSubmit = () => {
    const id = props.match.params.id;
    if(isUpdate){
      console.log('update data');
      UpdateToApi(forms,id)
    }
    else {
      console.log('create data');
     PostApi(forms)
    }
   
  }

  return (
    <div className='blog-post'>
    <Link title='kembali' onClick={()=>history.push('/')} />
      <p className='title'>{isUpdate ? 'Update':'Create New'} blogs</p>
      <Input label='post-title' value={title} onChange={(e)=> dispatch(setForm('title',e.target.value))} />
      <Upload onChange={(e)=> onUploadImage(e) } img={imgPreview} />
      <TextArea value={body} onChange={(e)=> dispatch(setForm('body',e.target.value))}/>
      <Gap height={5}/>
      <div className='button-action'>
      <Button title={isUpdate ? 'UPDATE':'SIMPAN'} onClick={onSubmit} />
      </div>
      <Gap height={10}/>
    </div>
  )
}

export default withRouter(CreateBlog)