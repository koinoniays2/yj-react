import { useState } from "react"

export default function Password() {
    const [check, setCheck] = useState(true);
    const [password, setPassword] = useState("password");

    function onClick() {
        setCheck(!check)
        if(check){
            setPassword("text");
        }else {
            setPassword("password")
        }
    }
  return (
    <div>
        <input type={`${password}`} />
        <input type="checkbox" onClick={onClick} />
    </div>
  )
}