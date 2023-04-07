import React from 'react'

export default function Footer({onClickCreate, isEnable}) {
  return (
    <div className='ct-footer-container'onClick={onClickCreate}>
        <span className='text-white font-semibold text-2xl'>{isEnable ? 'x':'+'}</span>
    </div>
  )
}