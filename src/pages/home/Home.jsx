import React from "react";

import DiaryForm from "./DiaryForm";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";
import DiaryList from "./DiaryList";

export default function Home() {
  const { user } = useAuthContext();
  const { documents, error } = useCollection("diary", ["uid", "==", user.uid]);
  const currentDate = new Date();
  const formattedDate = `${currentDate.getFullYear()}.${String(currentDate.getMonth() + 1).padStart(2, "0")}.${String(currentDate.getDate()).padStart(2, "0")}`;

  return (
    <main className=" flex h-[calc(100%-100px)] justify-center gap-9 p-9">
      <section className="relative flex w-full min-w-[130px] max-w-[414px] flex-col gap-3 before:absolute before:bottom-0 before:right-[-25px] before:h-[254.58px] before:w-[260px] before:bg-[url('/img/leaf-left.png')] before:bg-[length:260px_254.58px] before:content-['']">
        <h2
          className="before:contents-[' '] relative z-20 pl-[24px] font-bold tracking-wide
        text-white before:absolute before:left-[5px] before:top-[5px] before:z-10
        before:h-[14px] before:w-[14px] before:bg-[url('/img/heart.png')]
        before:bg-[length:14px_14px] before:bg-no-repeat"
        >
          {formattedDate}의 독서일기
        </h2>
        <aside className="relative z-20 h-full">
          <DiaryForm uid={user.uid} />
        </aside>
      </section>

      <section className="relative h-full w-full max-w-[827px] shrink overflow-y-auto rounded-[10px] bg-point p-12">
        <h2 className="a11y-hidden">일기 목록</h2>

        <ul className="flex flex-col gap-10">
          {error && <strong>{error}</strong>}
          {documents && <DiaryList diaries={documents} />}
        </ul>
      </section>
    </main>
  );
}
