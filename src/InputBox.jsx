import React from 'react'

export default function InputBox({label, ph, name, value, onChange}) {
  return (
    <>
    <label className="mb-4">{label}</label>
    <input className="mb-8 p-4 w-[100%] h-12 border border-gray-200" type="text" 
    placeholder={ph} name={name} value={value} onChange={onChange} />
    </>
  )
}
