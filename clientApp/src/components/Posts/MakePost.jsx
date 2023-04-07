import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createNewPost } from '../../redux/apiRequest'
import InPut from '../InPut/InPut'

export default function MakePost({onClickCreate}) {
    const arrTags=['None','NSFW','Mood','Quotes','Shitpost']
    const [isSelected,setIsSelected] = useState()
    const [dataNewPost, setDataNewPost]= useState()
    const dispatch = useDispatch()
    const handleSelectedTags = (index,e) =>{    
        setIsSelected(index)
        console.log({...dataNewPost,[e.target.name]:e.target.textContent})
        setDataNewPost({...dataNewPost,[e.target.name]:e.target.textContent})
    }
    const handleDataCreatePost = (e) =>{
        console.log({...dataNewPost,[e.target.name]:e.target.value})
        setDataNewPost({...dataNewPost,[e.target.name]:e.target.value})
    }
    const handleSubmitNewPost = ()=>{
        console.log(dataNewPost)
        dispatch(createNewPost(dataNewPost))
        onClickCreate()
    }   
  return (
    <div className='text-white bg-slate-800 make-post-container rounded-t-lg relative pb-4'>
        <button className='absolute right-5 top-2 underline' onClick={handleSubmitNewPost}>Create Post</button>
        <div className="box-form flex flex-col gap-2 mx-4 pt-6">
            <InPut nameLabel={'Title'} name={'title'} typeInput={'text'} style={'text-black'} setUser={handleDataCreatePost} />
            <label htmlFor="" className='font-semibold'>Descriptions</label>
            <textarea name='descriptions' id="" cols="30" rows="5" className='text-black p-2' onChange={handleDataCreatePost}></textarea>
            <label htmlFor="" className='font-semibold'>Tags</label>
            <div className="container-tags flex flex-wrap gap-4 items-center">
            {arrTags.map((tag,index)=>{
                return <button className={`${tag} ${isSelected === index ? 'border-[2px] border-white':''} w-[80px] rounded-lg py-1`} name='tag' onClick={(e)=>handleSelectedTags(index,e)}>{tag}</button>
            })}
            </div>
        </div>
    </div>
  )
}
