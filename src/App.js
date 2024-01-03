import { useState } from "react";
import emailjs from '@emailjs/browser';

export default function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const inputChange = (e) => {
    setForm({
      ...form,
      [e.target.name] : e.target.value
    });
  }
  const handleSubmit = () => {
    if(window.confirm("메세지를 전송하시겠습니까?")) {
      emailjs.sendForm('service_zfzvjjq', 'template_fuj89bz', form, 'knQZYfZ5dQpRy7e1Y')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    };
  }
  return (
    <>
    <div className="w-full h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat bg-fixed bg-[url('https://images.unsplash.com/photo-1501975558162-0be7b8ca95ea?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)]" />
        <section className="z-10 max-w-[1280px] w-full flex">
          {/* 왼쪽: 타이틀 */}
          <article className="w-1/2 h-full flex flex-col text-white space-y-6">
            <h2 className="font-bold text-lg">Contact Us</h2>
            <h1 className="font-bold text-4xl">
              이승진 변호사가 <br />
              직접 상담합니다.</h1>
            <p>
            채무로 인하여 고민하실 의뢰인을 위해 이승진 변호사가 직접<br />
            상담합니다. 인가결정을 받을 때까지 끝까지 함께합니다.<br/>
            의뢰인의 경제적 재기가 곧, 우리의 목표입니다.</p>
          </article>
          {/* 오른쪽: 컨택트 폼 */}
          <article id="test" className="w-1/2 h-full bg-slate-100">
            <div className="w-full p-16 flex flex-col space-y-8">
              {/* 이름 */}
              <div className="flex flex-col space-y-2">
                <label>성함</label>
                <input onChange={inputChange} className="border py-4 px-2" type="text" placeholder="성함을 입력해주세요." name="name" />
              </div>
              {/* 이메일 */}
              <div className="flex flex-col space-y-2">
                <label>이메일</label>
                <input onChange={inputChange} className="border py-4 px-2" type="text" placeholder="이메일을 입력해주세요." name="email" />
              </div>
              {/* 메세지 */}
              <div className="flex flex-col space-y-2">
                <label>문의사항</label>
                <textarea onChange={inputChange} className="border py-4 px-2" rows={6} placeholder="문의사항을 남겨주세요" name="message"></textarea>
              </div>
              {/* 버튼 */}
              <button onClick={handleSubmit} className="bg-[#B29459] py-4 text-white font-bold hover:bg-[#806737]">전송하기</button>
            </div>
          </article>
        </section>
    </div>
    </>
  );
  // const [form, setForm] = useState({
  //   name: "",
  //   phone: "",
  //   question: "",
  // });
  // const { name, phone, question } = form;
  // const onChange = (e) => {
  //   const nextForm = {
  //       ...form,
  //       [e.target.name]: e.target.value, 
  //   }
  //   setForm(nextForm);
  // };
  // const onClick = (e) => {
  //   e.preventDefault();
  //   alert("전송되었습니다.");
  //   setForm({
  //     name: "",
  //     phone: "",
  //     question: "",
  //   });
  // };

  // return (
  //   <div className="App">
  //     <div className="w-full h-[100vh] flex justify-center items-center">
  //       <form className="w-[30%] h-[600px] p-8 bg-gray-100 flex flex-col">
  //         <InputBox label="성함" ph="성함을 입력해주세요" name="name" value={name} onChange={onChange}/>
  //         <InputBox label="연락처" ph="연락처를 입력해주세요" name="phone" value={phone} onChange={onChange}/>
  //         <label className="mb-4">문의사항</label>
  //         <textarea className="mb-8 p-4 w-[100%] h-40 border border-gray-200" 
  //         placeholder="문의사항을 남겨주세요." name="question" value={question} onChange={onChange}/>
  //         <input className="mb-8 p-4 bg-blue-500 text-white cursor-pointer" type="submit" value="전송하기" onClick={onClick} />
  //       </form>
  //     </div>
  //   </div>
  // );
}
