import { useState } from "react";
import { appAuth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  // setInterval(() => {
  //   console.log(appAuth.currentUser);
  // }, 1000);

  const login = (email, password) => {
    setError(null);
    setIsPending(true);

    signInWithEmailAndPassword(appAuth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({ type: "login", payload: user });
        setError(null);
        setIsPending(false);

        if (!user) {
          throw new Error("로그인에 실패했습니다.");
        }
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
        console.log(err.message);
      });
  };

  return { error, isPending, login };
};
