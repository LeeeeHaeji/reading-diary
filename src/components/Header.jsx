import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white">
      <div className="mx-auto flex h-[100px] max-w-[1284px] items-center justify-between px-[30px]">
        <h1>
          <Link href="./">
            <img src="/img/logo-header.png" alt="두근두근 독서일기" className="w-[156px]" />
          </Link>
        </h1>
        <Link className="flex w-fit items-center gap-2" to="/signup">
          <img src="/svg/icon-join.svg" alt="" />
          회원가입
        </Link>
      </div>
    </header>
  );
}
