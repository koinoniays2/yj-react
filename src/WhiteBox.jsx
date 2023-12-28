export default function WhiteBox({title, description, clickUrl, fontColor}) {
  const tempVar = "flex flex-col  justify-between p-4 border border-gray-400 w-[320px] h-[260px] rounded-2xl"
  // css를 변수에 넣고
  return (
    <div className={tempVar}>
      {/* 변수로 사용가능 */}
      <div className="space-y-8">
        <h2 className={`font-bold text-2xl ${fontColor === "red" ? "text-red-500" : "text-black"}`}>{title}</h2>
        {/* css props사용 */}
        <p>{description}</p>
      </div>
      <div>
        <a href={clickUrl} target="_blank" rel="noreferrer noopener">
          <div className="border border-gray-300 w-40 text-center py-2 hover:bg-gray-700 hover:text-white">
            자세히보기
          </div>
        </a>
      </div>
    </div>
  );
}
