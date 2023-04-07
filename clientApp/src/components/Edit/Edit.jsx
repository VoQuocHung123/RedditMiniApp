import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios'
import InPut from "../InPut/InPut";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/apiRequest";

export default function Edit({ setEnableEdit }) {
  const [activeCard,setActiveCard] = useState(null)
  const user = useSelector((state)=>state.user)
  const dispatch = useDispatch()
    const [listImageAvt,setListImageAvt] = useState([])
    const [editUser,setEditUser] = useState({
      name: user.name,
      age: user.age,
      about: user.about,
      avatar: user.avatar,
      theme: user.theme
    })
    useEffect(()=>{
       const getDataListImageAvt = async ()=>{
        try {
            const listData = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=6&offset=0')
            listData.data.results.forEach(async(pokemon)=>{
                const poke = await axios.get(
                    `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
                  );
                  setListImageAvt((p) => [...p, poke.data]);
            })
        } catch (error) {
            console.log(error)
        }
       }
       getDataListImageAvt()
    },[])
    const handleEditUser = (e,index)=>{
      if(e.target.name === 'avatar'){
        setActiveCard(index)
        setEditUser({...editUser,[e.target.name]:e.target.src})
      }else{
        setEditUser({...editUser,[e.target.name]:e.target.value})
      }
    }
    const handleSubmit = (e)=>{
        setEnableEdit()
        e.preventDefault()
        dispatch(updateUser(editUser))
    }

  return (
    <div className=" bg-gradient-to-t from-cyan-500 to-blue-500">
      <form onSubmit={handleSubmit}>
        <div className="edit-container flex justify-between">
          <button
            className="bg-white px-6 py-2 rounded-lg m-3"
            onClick={setEnableEdit}
          >
            Back
          </button>
          <button type="submit" className="bg-white px-6 py-2 rounded-lg m-3">Save</button>
        </div>
        <div className="edit-profile text-center font-bold text-2xl">Edit Profile</div>
        <div className="input-container flex flex-col mx-6">
          <InPut nameLabel={'Display Name'} typeInput={"text"} name={'name'} data={user.name} setUser={handleEditUser}/>
          <InPut nameLabel={'Age'} typeInput={"number"} name={'age'} data={user.age} setUser={handleEditUser}/>
          <label htmlFor="" className="font-semibold my-2">About</label>
          <textarea name="about" id="" cols="50" rows="5" className="px-3 py-3 rounded-sm" placeholder={user.about} onChange={handleEditUser}></textarea>
        </div>
        <div className="profile-picture font-semibold my-2 mx-6 ">Profile Image</div>
        <div className="list-image-container grid grid-cols-3 gap-2 mx-6 pb-6">
        {listImageAvt?.map((avatar,index)=>{
            if(index >5 ) return
            return (
            <div className={`image-avt-item bg-white rounded-lg flex justify-center items-center border-[4px]  ${(activeCard === index)? 'border-orange-400':''}`} key={index}>
                <img src={avatar.sprites.back_default} name="avatar" alt="" onClick={(e)=>handleEditUser(e,index)}/>
            </div>
            )
        })}
        </div>
        <div className="theme-container pb-3 flex flex-col items-center">
            <label htmlFor="" className="font-semibold mx-6">Them Profile</label>
            <input type="color" name="theme" id="" className="w-[50px] h-[50px] border-4 border-none appearance-none" onChange={handleEditUser} />
        </div>
      </form>
    </div>
  );
}
