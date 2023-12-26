const WhiteBox = (props) => {
    const {title, text1, text2, won} = props;
    return (
    <div className="w-[300px] m-[30px] bg-white">
        <div className="m-[10px] flex flex-col items-center">
            <span className="text-3xl font-bold">{title}</span>
            <p className="text-xs mt-[20px] font-bold">{text1}</p>
            <p className="text-xs font-bold">{text2}</p>
            <p className="text-xs mt-[30px]">{won}</p>
            <div className="flex">
                <div className="mr-[10px] mt-[20px] w-[100px] h-[40px] rounded-3xl bg-blue-500
                flex justify-center items-center text-sm text-white">구입하기</div>
                <div className="mt-[20px] w-[100px] h-[40px]
                flex justify-center items-center text-sm text-blue-500">더 알아보기 &gt;</div>
            </div>
        </div>
    </div>
    )
}
export default WhiteBox;