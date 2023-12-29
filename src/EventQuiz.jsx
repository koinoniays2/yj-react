import { useState } from "react"

export default function EventQuiz() {
    const [form, setForm] = useState({
        username:'',
        password:'',
        email:'',
        phone:''
    });
    const [output, setOutput] = useState({
        username:'',
        password:'',
        email:'',
        phone:''
      });

    const {username, password, email, phone} = form;

    const onChange = e => {
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value
        };
        setForm(nextForm);
    }
    
    const onClick = () => {
        setOutput({ ...form });
        setForm({
            username:'',
            password:'',
            email:'',
            phone:''
        })
    };
    const onKeyPress = e => {
        if(e.key === 'Enter') {
            onClick();
        }
    };

  return (
    <>
        <div className="w-full h-[800px] flex flex-col items-center justify-center space-y-8">
            <h1 className="text-2xl">EventQuiz</h1>
            <input type="text" name="username" placeholder="이름" onChange={onChange} value={username}/>
            <input type="text" name="password" placeholder="비밀번호" onChange={onChange} value={password}/>
            <input type="text" name="email" placeholder="이메일" onChange={onChange} value={email}/>
            <input type="text" name="phone" placeholder="휴대폰번호" onChange={onChange} value={phone} onKeyDown={onKeyPress}/>
            <button className="w-36 h-8 rounded-xl bg-purple-200" onClick={onClick}>확인</button>
            <div>
                <p>이름: {output.username}</p>
                <p>비밀번호: {output.password}</p>
                <p>이메일: {output.email}</p>
                <p>휴대폰번호: {output.phone}</p>
            </div>
        </div>
    </>
  )
}
