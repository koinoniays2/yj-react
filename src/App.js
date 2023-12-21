import "./App.css";
import { FaSearch } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
import { RiGlobalLine } from "react-icons/ri";
import Prac from "./asset/practice.jpg";

function App() {
  return (
    <>
      <header className="w-full flex justify-center border-b-[1px]">
        <nav className="w-[1440px] h-[80px] flex justify-between items-center">
          <div className="text-xl">
            <span>Kakao</span><span className="font-bold">talk</span>
          </div>
          <ul className="flex w-[800px] justify-between text-sm">
            <li>안녕캠페인</li>
            <li>운영철학</li>
            <li>안전 도구 및 가이드라인</li>
            <li>운영정책</li>
            <li>자동감지와 신고</li>
            <li>서비스 이용제한의 종류</li>
          </ul>
          <div className="basis-[100px]">
            <ul className="flex w-full justify-around text-xl">
              <li><FaSearch /></li>
              <li><FaRegMoon /></li>
              <li><RiGlobalLine /></li>
            </ul>
          </div>
        </nav>
      </header>
      <body className="w-full h-[90vh] flex justify-center items-center m-0 p-0">
        <main className="w-[1024px] h-[700px] flex">
          <article className="flex flex-col justify-evenly items-center border w-[50%] bg-gray-100 rounded-l-2xl">
            <div className="flex-col text-4xl w-[400px]">
              <div>간편해진 일상만큼</div>
              <div className="mb-8">보안도 걱정없이</div>
              <div>모두가 자유롭게</div>
              <div>소통할 수 있도록</div>
              <div>더욱 안전을 생각해요</div>
            </div>
            <div className="w-[400px] relative">
              <div className="bg-gray-200 absolute left-0 p-4 rounded-full">자세히보기</div>
            </div>
          </article>
          <aside className="w-[50%] rounded-r-2xl object-cover overflow-hidden">
            <img src={Prac} alt="사진"/>
          </aside>
        </main>
      </body>
  
    </>
  );
}

export default App; //import 하기 위해 export
