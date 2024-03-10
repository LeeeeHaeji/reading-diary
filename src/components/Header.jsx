import { Link, useLocation } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Header() {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const location = useLocation();

  return (
    <header className="bg-white">
      <div className="mx-auto flex h-[100px] max-w-[1284px] items-center justify-between px-[30px]">
        <h1>
          <Link href="./">
            <img src="/img/logo-header.png" alt="두근두근 독서일기" className="w-[156px]" />
          </Link>
        </h1>
        {!user && (
          <>
            {location.pathname === "/signup" ? (
              <Link to="/login" className="flex w-fit items-center gap-2">
                <img src="/svg/icon-login.svg" alt="" />
                로그인
              </Link>
            ) : (
              <Link to="/signup" className="flex w-fit items-center gap-2">
                <img src="/svg/icon-join.svg" alt="" />
                회원가입
              </Link>
            )}
          </>
        )}
        {user && (
          <>
            <div className="flex items-center gap-2">
              <p className="flex flex-col items-end tablet:flex-row tablet:items-start tablet:gap-1">
                환영합니다
                <span>
                  <strong className="bg-custom-gradient">{user.displayName}</strong>님!
                </span>
              </p>
              <span className="text-[#D8DDDE]">|</span>
              <Link
                to="/login"
                onClick={logout}
                type="button"
                className="flex w-fit items-center font-bold text-[#5A6A72]"
              >
                <img src="/svg/icon-logout.svg" alt="" />
                로그아웃
              </Link>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
