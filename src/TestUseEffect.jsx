import { useEffect, useState } from "react"

export default function TestUseEffect() {
    const [name, setName] = useState("");
    const [nickname, setNickname] = useState("");
    useEffect(() => {
        console.log("랜더링이 완료되었습니다.");
        console.log({name, nickname});
    },[]);
    const onChangeName = e => {
        setName(e.target.value);
    }
    const onChangeNickname = e => {
        setNickname(e.target.value);
    }
  return (
    <div>
        <p><input type="text" placeholder="이름" value={name} onChange={onChangeName}/></p>
        <p><input type="text" placeholder="닉네임" value={nickname} onChange={onChangeNickname}/></p>
        <p>이름: {name}</p>
        <p>닉네임: {nickname}</p>
    </div>
  )
}
