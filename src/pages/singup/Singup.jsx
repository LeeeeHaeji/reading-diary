import React from 'react'
import { useState } from 'react'

export default function Singup() {

  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // displayName은 파이어베이스에서 유저 정보에 저장 할 수 있는 속성중 하나입니다. 
    // 때문에 다른 변수명을 사용하지 말아주세요. ( 참고 : https://firebase.google.com/docs/reference/js/auth.md#updateprofile)
    const [displayName, setDisplayName] = useState('');

    const handleData = (event) => {
        if (event.target.type === "email") {
            setEmail(event.target.value);
        } else if (event.target.type === "password") {
            setPassword(event.target.value);
        } else if (event.target.type === "text") {
            setDisplayName(event.target.value);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email, password, displayName);
    }

  return (
    <>
      <main className="mx-5 mt-20">
        <h2>
          <img src="/img/logo.png" alt="회원가입" className="mx-auto w-[249.6px]" />
        </h2>

        <form
        onSubmit={handleSubmit} 
          className="before:content-[' '] after:content-[' '] relative mx-auto my-11 max-w-[447px] rounded-xl bg-point before:absolute before:left-[-200px] before:top-[200px] before:z-[-10] before:h-[254.58px] before:w-[260px] before:bg-[url('/img/leaf-left.png')] before:bg-[length:260px_254.58px] after:absolute after:right-[-200px] after:top-[200px] after:z-[-10] after:h-[254.58px] after:w-[260px] after:bg-[url('/img/leaf-right.png')] after:bg-[length:260px_254.58px]"
        >
          <p className="mx-auto max-w-fit pt-7 text-[24px] underline decoration-[#436850] decoration-2 underline-offset-4">
            <strong>회원가입</strong>
          </p>
          <div className="flex flex-col gap-6 p-7">
            <div className="flex flex-col items-start gap-1">
              <label htmlFor="user-email">이메일</label>
              <input required onChange={handleData} value={email} className="h-12 w-full rounded-[5px] p-2" id="user-email" type="email" />
            </div>
            <div className="flex flex-col items-start gap-2">
              <label htmlFor="user-pw">비밀번호</label>
              <input required onChange={handleData} value={password} autoComplete='currnet-password' className="h-12 w-full rounded-[5px] p-2" id="user-pw" type="password" />
            </div>
            <div className="flex flex-col items-start gap-1">
              <label htmlFor="user-email">닉네임</label>
              <input required onChange={handleData} value={displayName} className="h-12 w-full rounded-[5px] p-2" id="user-email" type="text" />
            </div>
            <button type="submit" className="h-12 rounded-[5px] bg-button text-[18px] text-white">회원가입</button>
          </div>
        </form>

      </main>
  
      <footer className="mb-20 text-center text-sm text-[#12372A]">
        <p>Copyright 2024 Haeji Lee</p>
      </footer>
    </>
  )
}
