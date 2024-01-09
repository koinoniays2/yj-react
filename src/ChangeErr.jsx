import { useState } from "react"

export default function ChangeErr() {
    const [value, setValue] = useState("");
    const [text, setText] = useState("아이디를 입력하세요");
    function onChange (e) {
        setValue(e.target.value);
        const length = (e.target.value).length;
        length > 5 ? setText("5글자까지 입력해주세요.") : setText("");
    }
  return (
    <div>
        <input className="border-2" type="text" value={value} onChange={onChange} />
        <p>{text}</p>
    </div>
  )
}
