import 강쥐 from './images/강쥐.jpg';
export default function Header() {
    return (
        <header className='w-full h-[400px] bg-gray-500 flex justify-center items-center relative overflow-hidden'>
            <div className="absolute top-0 right-0 -rotate-12 scale-[2]">
                <img src={강쥐} alt="강아지" className="w-[500px] h-[400px] object-cover"/>
            </div>
            <div className="w-[1000px]">
                <div className="flex flex-col">
                    <span className="text-3xl font-bold">Comics</span>
                    <p className="mt-[20px]">"LONG SHADOW" Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <span className="w-[150px] h-[40px] border border-red-600 rounded-md
                    flex justify-center items-center mt-[20px] text-red-500">LIST MORE</span>
                </div>
            </div>
        </header>
    )
};