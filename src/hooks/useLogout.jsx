import { useState } from "react";
import { appAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";
import { signOut } from "firebase/auth";

export const useLogout = () => {
  // 에러 정보를 저장합니다.
  const [error, setError] = useState(null);
  // 현재 서버와 통신중인 상태를 저장합니다.
  const [isPending, setIsPending] = useState(false);

  // 여기서는 유저의 상태를 로그아웃으로 업데이트합니다.
  const { dispatch } = useAuthContext();

  const logout = () => {
    setError(null);
    setIsPending(true);

    signOut(appAuth)
      .then(() => {
        // 로그아웃 성공!
        dispatch({ type: "logout" });
        setError(null);
        setIsPending(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
        console.log(err.message);
      });
  };
  return { error, isPending, logout };
};
