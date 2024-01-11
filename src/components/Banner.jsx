import React from 'react'

export default function Banner() {
  return (
    <div className='w-full flex justify-center'>
      {/* 이미지 div */}
      <div className="relative w-[1300px] h-[350px] bg-[url('https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] 
      bg-center bg-cover flex px-12 py-12">
        {/* 컨테이너 */}
        <div className="z-10 w-full h-full text-white flex flex-col justify-between">
          {/* 타이틀 */}
          <span className="text-5xl font-bold">That's a<br/> Wrap 2023</span>
          <h2 className='text-[20px]'>The best (and worst) of the year from TMDB</h2>
          <button className="px-2 py-2 w-28 border border-white rounded-3xl">Check it out</button>
        </div>
        {/* absolute 가상 div */}
        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.7)]"></div>
      </div>
      
    </div>
  )
}
