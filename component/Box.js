import React from 'react'


export default function Box(props) {
    console.log(props)
  return (
    <div className='green'>
        <div className='purple'>
            <div className='red'>
                {props.children}
            </div>
        </div>
    </div>
  )
}
