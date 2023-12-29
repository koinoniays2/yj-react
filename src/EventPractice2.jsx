import { useState } from 'react';

export default function EventPractice2() {
    const [form, setForm] = useState({
        username: '',
        message: ''
    });
    const {username, message} = form;

    const onChange = e => {
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value // 덮어쓴다.
        };
        setForm(nextForm);
    }
    const onClick = () => {
        alert(username + ": " + message);
        setForm({
            username: '',
            message:''
        })
    };
    const onKeyPress = e => {
        if(e.key === 'Enter') {
            onClick();
        }
    };
  return (
    <div>
        <h1>이벤트 연습</h1>
        <input type="text" name="username" placeholder="사용자명" value={username} onChange={onChange} />
        <input type="text" name="message" placeholder="입력" value={message} onChange={onChange} onKeyDown={onKeyPress}/>
        <button onClick={onClick}>확인</button>
    </div>

  )
}