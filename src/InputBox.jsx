import React from 'react'

export default function InputBox({ph, iconImg, onChange, name, value}) {
  return (
    <div className="w-80 h-10 border border-gray-300 flex">
        {/* 아이콘 */}
        <div className="w-10 h-full flex justify-center items-center border-r border-gray-300 bg-gray-100 text-gray-400">
            {iconImg}
        </div>
        {/* 인풋 */}
        <input className="outline-none w-full px-2" type="text" placeholder={ph} 
        onChange={onChange} name={name} value={value}/>
    </div>
  )
}

