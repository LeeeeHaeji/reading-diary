import { appFireStore } from "../firebase/config";
import { useEffect, useState } from "react";
import { collection, onSnapshot, query, orderBy, where } from "firebase/firestore";

export const useCollection = (transaction, myQuery) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let q;
    if (myQuery) {
      q = query(collection(appFireStore, transaction), where(...myQuery), orderBy("createdTime", "desc"));
    }

    const unsubscribe = onSnapshot(
      myQuery ? q : collection(appFireStore, transaction),
      // 응답받은 컬랙션이 snapshot에 저장.
      (snapshot) => {
        let result = [];

        snapshot.docs.forEach((doc) => {
          result.push({ ...doc.data(), id: doc.id });
        });

        setDocuments(result);
        setError(null);
      },
      (error) => {
        setError(error.message);
      },
    );

    // useEffect 훅의 return 값에 함수를 반환하면 clean-up 함수가 된다.
    // 외부에서 데이터를 구독하는 경우 clean-up 함수는 useEffect훅을 사용하는 컴포넌트가 마운트 해제될때 실행되어 구독을 종료하게 된다.
    // 참고 : https://ko.reactjs.org/docs/hooks-effect.html#example-using-hooks-1

    return () => {
      unsubscribe();
    };
  }, []);

  return { documents, error };
};
