export default function ImgeTitle({title, description, imgUrl}) {
    return(
        <>
        <div className="w-full h-[300px] bg-gray-600 flex overflow-hidden relative">
            {/* 왼쪽 사선배경*/}
            <div className="w-1/2 h-full">
                <div className="w-full h-full bg-gray-600 skew-x-[10deg] scale-[1.2]"></div>
            </div>
            {/* 오른쪽 이미지*/}
            <div className="w-1/2 h-full">
                <img className="w-full h-full object-cover" src={imgUrl} alt="이미지" />
            </div>
            {/* content */}
            <div className="absolute left-0 top-0 w-full h-full flex justify-center items-center">
                <div className="w-full max-w-[1000px] h-full flex flex-col justify-center text-white space-y-5">
                    <h2 className="text-3xl font-bold">{title}</h2>
                    <p>{description}</p>
                    <div className="w-36 text-center border rounded-md cursor-pointer px-4 py-1 
                    hover:bg-white hover:text-gray-700 hover:font-bold">자세히 보기</div>
                </div>
            </div>
        </div>
        </>
    )
}