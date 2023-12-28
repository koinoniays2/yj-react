import { useState } from "react"

export default function NumberButton() {
    let [num, setNum] = useState(0);
    const onClickPlus = () => {
        if(num >= 99999) {
            alert("99999 이상으로 올라갈 수 없습니다.");
            setNum(99999);
        }else {
            setNum(num += 1);
        }
    }
    const onClickMinus = () => {
        if(num <= 0) {
            alert("0 이하로 내려갈 수 없습니다.");
            setNum(0);
        }else {
            setNum(num -= 1);
        }
    }
    const onClickReset = () => {
        setNum(0);
    }
    const onClickStart = () => {
        let userNum = prompt("숫자를 입력하세요");
        setNum(Number(userNum));
        if(userNum < 0 || isNaN(userNum) || userNum > 99999) {
            alert("입력 불가한 숫자입니다.");
            setNum(0);
        }
    }
    return (
        <>
        <div className="w-full h-[800px] flex flex-col justify-center items-center space-y-8">
            <div className="w-[500px] h-[50px] rounded-2xl bg-purple-500 text-white flex justify-center items-center">
                <span>useState를 활용한 숫자 증감 퀴즈</span>
            </div>
            <h1 className="font-bold text-6xl">{num}</h1>
            <div className="flex space-x-2">
                <button className="btn-custom" onClick={onClickStart}>Start</button>
                <button className="btn-custom" onClick={onClickPlus}>+1</button>
                <button className="btn-custom" onClick={onClickMinus}>-1</button>
                <button className="btn-red" onClick={onClickReset}>Reset</button>
            </div>
        </div>
        </>
    )
}