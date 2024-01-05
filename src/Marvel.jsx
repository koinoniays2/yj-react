import React, { useEffect, useState } from 'react'

export default function Marvel() {
    const [lists, setLists] = useState([]);
    useEffect(() => {
        fetch("https://gateway.marvel.com:443/v1/public/comics?apikey=ffc43cbb3dccf31c32c2e2d5ea084434")
        .then(response  => response.json())
        .then(data => {
            setLists(data?.data?.results);
        })
    }, []);
  return (
    <div className="w-full flex justify-center">
        {/* 중앙정렬 컨테이너 */}
        <section className="max-w-7xl w-full flex justify-center flex-wrap gap-4 bg-red-200 py-32">
            {lists?.map((item, index)=> (
                <div className="w-[240px] h-[360px] bg-white border border-gray-300 rounded-xl flex flex-col" key={index}>
                    {/* 이미지 */}
                    <div className="w-full h-[250px] bg-blue-50">
                        <img className="object-cover w-full h-full" src={`${item.thumbnail?.path}.${item.thumbnail?.extension}`} alt="이미지" />
                    </div>
                    {/* 타이틀 */}
                    <div className="font-bold text-sm text-center">
                       {item.title} 
                    </div>
                </div>
                ))}
        </section>
    </div>
  )
}