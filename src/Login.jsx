import { useState } from "react"

export default function Login() {
    const [bool, setBool] = useState(false);
    const [text, setText] = useState("");
    const [login, setLogin] = useState("로그인 하기");
    function onClick() {
        setBool(!bool);
        // 맨 처음 클릭시 초기값 false가 실행됨
        if(bool) {
            setText("로그아웃 완료");
            setLogin("로그인 하기");
        }else {
            setText("로그인 완료 abc@naver.com");
            setLogin("로그아웃 하기");
        }
    }
  return (
    <div>
        <p>{text}</p>
        <button className="border-2 border-black" onClick={onClick}>{login}</button>
    </div>
  )
}
