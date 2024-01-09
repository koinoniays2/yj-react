import Logo from "../assets/logo.png";
import { TbPlus } from "react-icons/tb";

export default function NavPage() {
  return (
    <div className="w-full h-[60px] bg-[#032541] flex justify-center">
    {/* 중앙 정렬 된 Nav컨테이너 */}
        <div className="max-w-[1300px] w-full h-full flex justify-between">
            {/* 1.왼쪽: 로고 + 메뉴 */}
            <div className="h-[full] flex space-x-8">
                {/* 로고 */}
                <div className="h-full w-[200px] flex items-center">
                    <img src={Logo} alt="main-logo" />
                </div>
                {/* 메뉴 */}
                <div className="h-full flex text-white font-bold items-center space-x-6">
                    <p>Movies</p>
                    <p>TV Show</p>
                    <p>People</p>
                    <p>More</p>
                </div>
            </div>
            {/* 2.오른쪽: 아이콘 영역 */}
            <div className="h-full flex items-center space-x-6">
                {/* 플러스 버튼 */}
                <div className="text-white">
                    <TbPlus />
                </div>
                <div className="border border-white text-white p-1.5 text-xs hover:bg-white hover:text-[#032541]">
                    EN
                </div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
  )
}
