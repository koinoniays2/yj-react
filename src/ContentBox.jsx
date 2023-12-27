export default function ContentBox({title, body}) {
    return(
        <div className="w-[300px] h-[250px] mr-[20px] p-[20px] flex flex-col justify-evenly border border-gray-400 rounded-md">
            <span className="text-2xl font-bold">{title}</span>
            <p className="text-sm">{body}</p>
            <div className="w-[100px] h-[40px] rounded-lg bg-gray-300 flex justify-center items-center font-bold">View here</div>
        </div>
    )
}