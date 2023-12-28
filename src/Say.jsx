import { useState } from "react";

export default function Say() {
    const [message, setMessage] = useState("초기값");
    // [현재상태, 상태변경] = 초기상태(message)
    const [color, setColor] = useState("text-pink-300");
    const onClickEnter = () => {
        setMessage("안녕하세요");
        setColor("text-blue-500");

    }
    const onClickLeave = () => {
        setMessage("안녕히 가세요");
        setColor("text-red-500");
    }
    return (
        <div>
            <button onClick={onClickEnter} className="btn-custom">입장</button>
            <button onClick={onClickLeave} className="btn-red">퇴장</button>
            <h1 className={`${color}`}>{message}</h1>
        </div>
    );
}