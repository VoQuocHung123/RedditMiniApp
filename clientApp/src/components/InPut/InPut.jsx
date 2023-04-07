import React from 'react'

export default function InPut({nameLabel,typeInput,data,name,setUser,style}) {
  return (
    <>
     <label htmlFor="" className="font-semibold my-2">{nameLabel}</label>
     <input type={typeInput} name={name} className={`px-3 py-3 rounded-md ${style}`} placeholder={data} onChange={setUser} />
    </>
  )
}
