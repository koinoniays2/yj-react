import { useState } from "react"

export default function Info() {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    const onChangeName = e => setName(e.target.value);
    const onChangeNickname = e => setNickname(e.target.value);

  return (
    <div>
        <div>
            <input className="border-2" value={name} onChange={onChangeName} />
            <input className="border-2" value={nickname} onChange={onChangeNickname} />
        </div>
        <div>
            <div>
                <b>이름:</b> {name}
            </div>
            <div>
                <b>닉네임:</b> {nickname}
            </div>
        </div>
    </div>
  )
}
