import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, isPending, login } = useLogin();

  const handleData = (event) => {
    if (event.target.type === "email") {
      setEmail(event.target.value);
    } else if (event.target.type === "password") {
      setPassword(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(email, password);
  };

  return (
    <>
      <main className="bg-primary px-5 pt-20">
        <h2>
          <img src="/img/logo.png" alt="로그인" className="mx-auto mb-11 w-[249.6px]" />
        </h2>

        <form
          onSubmit={handleSubmit}
          className="before:content-[' '] after:content-[' '] 
          relative mx-auto max-w-[447px] rounded-xl bg-point before:absolute
          before:left-[-240px] before:top-[180px] before:h-[254.58px]
          before:w-[260px] before:bg-[url('/img/leaf-left.png')] before:bg-[length:260px_254.58px] 
          after:absolute after:right-[-240px] after:top-[180px] after:h-[254.58px] 
          after:w-[260px] after:bg-[url('/img/leaf-right.png')] after:bg-[length:260px_254.58px]"
        >
          <p className="mx-auto max-w-fit pt-7 text-[24px] underline decoration-[#436850] decoration-2 underline-offset-4">
            <strong>로그인</strong>
          </p>
          <div className="flex flex-col gap-6 p-7">
            <div className="flex flex-col items-start gap-1">
              <label htmlFor="user-email">이메일</label>
              <input
                className="h-12 w-full rounded-[5px] p-2"
                id="user-email"
                type="email"
                onChange={handleData}
                value={email}
                required
              />
            </div>
            <div className="flex flex-col items-start gap-2">
              <label htmlFor="user-pw">비밀번호</label>
              <input
                className="h-12 w-full rounded-[5px] p-2"
                id="user-pw"
                type="password"
                onChange={handleData}
                value={password}
                autoComplete="currnet-password"
                required
              />
            </div>

            {!isPending && (
              <button type="submit" className="h-12 rounded-[5px] bg-button text-[18px] text-white">
                로그인
              </button>
            )}

            {isPending && <strong>로그인이 진행중입니다...</strong>}
            {error && <strong>{error}</strong>}
          </div>
        </form>
      </main>

      <footer className="bg-primary pb-20 pt-11 text-center text-sm text-[#12372A]">
        <p>Copyright 2024 Haeji Lee</p>
      </footer>
    </>
  );
}
