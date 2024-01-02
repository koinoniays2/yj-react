import InputBox from "./InputBox"
import Logo from "./assets/Logo.png"
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";
import { FaMobileAlt } from "react-icons/fa";
import { useState } from "react";

export default function Register() {
    // 체크박스 기본값 false(체크가 안 된 상태)
    const [checked, setChecked] = useState(false);
    const [show, setShow] = useState(false); //결과화면 클릭했을때만 보이게
    const [form, setForm] = useState({
        email: "",
        password: "",
        password2: "",
        name: "",
        mobile: "",
    });
    const { email, password, password2, name, mobile } = form;
    // form의 값을 가져온다
    
    // console.log(checked);
    const onClick = () => {
        setChecked(!checked); // 체크 시 기본값의 반대로 set
    }
    const onChange = (e) => {
        const nextForm = { //상태변경을 위한 새로운 객체
            ...form, //기본값 form 복사
            [e.target.name]: e.target.value, 
            //onChange가 일어나는 target의 name에 value를 덮어씌운다.
        }
        setForm(nextForm);
    }
    const onClickBtn = () => {
        setShow(true); // 체크시 결과화면 true변경
    }
    return (
        <div className="w-full py-16 flex flex-col items-center justify-center space-y-16">
            {/* 입력화면 */}
            <div className="max-w-sm w-full flex flex-col space-y-8">
                {/* 로고 */}
                <div className="h-16">
                    <img className="object-contain w-full h-full" src={Logo} alt="로고" />
                </div>
                {/* 도움말 */}
                <div>
                    회원정보를 입력해주세요.
                </div>
                {/* 인풋박스 */}
                <div className="w-full flex flex-col space-y-4">
                    {/* 1 */}
                    <InputBox ph="아이디(이메일)" iconImg={<AiOutlineMail />}
                    name="email" value={email} onChange={onChange}/>
                    {/* onChange로 인해 setForm되어 상태값이 변경되고
                    변경된 값인 form의 email을 value로 넣는다. */}
                    {/* 2 */}
                    <InputBox ph="비밀번호" iconImg={<RiLockPasswordLine />} 
                    name="password" value={password} onChange={onChange} />
                    {/* 3 */}
                    <InputBox ph="비밀번호 확인" iconImg={<RiLockPasswordLine />} 
                    name="password2" value={password2} onChange={onChange} />
                    {/* 4 */}
                    <InputBox ph="이름" iconImg={<IoPersonOutline />}
                    name="name" value={name} onChange={onChange} />
                    {/* 5 */}
                    <InputBox ph="휴대폰번호" iconImg={<FaMobileAlt />}
                    name="mobile" value={mobile} onChange={onChange} />
                </div>
                {/* 체크박스 */}
                <div className="w-full flex space-x-2">
                    <input type="checkbox" id="checkbox" onClick={onClick}/>
                    {/* label htmlFor속성(html의 for와 같음 리액트에서는 htmlFor) = input id속성 */}
                    <label htmlFor="checkbox">모두 확인하였으며 동의합니다.</label>
                </div>
                {/* 버튼 */}
                <div>
                    {/* checked상태가 true이면 클릭 가능 false이면 클릭 불가능 */}
                    <button disabled={checked ? false : true}
                    className={`${checked ? "bg-blue-500" : "bg-blue-200"} w-full py-3 text-white font-bold`}
                    onClick={onClickBtn}>동의하고 가입하기</button>
                    {/* checked상태가 true이면 blue-500, false이면 blue-200 */}
                </div>
            </div>
            {/* 결과화면 */}
            {show && (
                <div className="max-w-sm w-full h-40 shadow-lg">
                    <ul>
                        <li>{email}</li>
                        <li>{password}</li>
                        <li>{password2}</li>
                        <li>{name}</li>
                        <li>{mobile}</li>
                    </ul>
                </div>
            )}
        </div>
    )
}