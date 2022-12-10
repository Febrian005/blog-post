import React from 'react'
import { Button, Gap } from '../../atom'
import './blogitem.scss'
import { useHistory } from 'react-router-dom'

const BlogItem = (props) => {
  const history = useHistory();
  const {image,title,name,date,body,_id,onDelete} = props;
  return (
    <div className='blog-item'>
        <img src={image} alt='post' className='image-thumb' />
        <div className='content-detail'>
        <div className='title-wrapper'>
            <p className='title'>{title}</p>
            <div className='edit-wrapper'>
              <p className='edit' onClick={() => history.push(`/create-blog/${_id}`)}>edit</p> |<p className='delete' onClick={()=> onDelete(_id)}>delete</p>
            </div>

        </div>
            <p className='author'>{name} - {date}</p>
            <p className='body'>{body}</p>
            <Gap height={20} />
            <Button title='View detail' onClick={() => history.push(`/detail-blog/${_id}`) } />
        </div>
    </div>
  )
}

export default BlogItem