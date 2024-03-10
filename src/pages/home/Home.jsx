import React from "react";
import { useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleData = (event) => {
    if (event.target.type === "text") {
      setTitle(event.target.value);
    } else if (event.target.id === "diary-content") {
      setContent(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password, displayName);
  };

  return (
    <main className=" flex h-[calc(100%-100px)] justify-center gap-9 p-9">
      <section className="relative flex w-full min-w-[130px] max-w-[414px] flex-col gap-3 before:absolute before:bottom-0 before:right-[-25px] before:h-[254.58px] before:w-[260px] before:bg-[url('/img/leaf-left.png')] before:bg-[length:260px_254.58px] before:content-['']">
        <h2
          className="before:contents-[' '] relative z-20 pl-[24px] font-bold text-white
        before:absolute before:left-[5px] before:top-[5px] before:z-10 before:h-[14px]
        before:w-[14px] before:bg-[url('/img/heart.png')] before:bg-[length:14px_14px]
        before:bg-no-repeat"
        >
          2023.02.27의 독서일기
        </h2>
        <form className="z-20 flex h-full flex-col gap-3" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="diary-title" className="a11y-hidden">
              제목
            </label>
            <input
              className="h-12 w-full rounded-[5px] border-2 border-solid border-[#12372A] p-2 placeholder:text-[#12372A]"
              id="diary-title"
              type="text"
              placeholder="제목"
              required
              onChange={handleData}
              value={title}
            />
          </div>
          <div className="h-full max-h-[360px]">
            <label htmlFor="diary-content" className="a11y-hidden">
              내용
            </label>
            <textarea
              className="h-full w-full resize-none rounded-[5px] border-2 border-solid border-[#12372A] p-2 placeholder:text-[#12372A]"
              id="diary-content"
              placeholder="오늘 읽은 책은 무엇인가요?"
              required
              onChange={handleData}
              value={content}
            ></textarea>
          </div>
          <button type="submit" className="rounded-[5px] bg-button py-[10px] text-[18px] text-white">
            작성하기
          </button>
        </form>
      </section>

      <section className="relative h-full max-w-[827px] shrink overflow-y-auto rounded-[10px] bg-point p-12">
        <h2 className="a11y-hidden">일기 목록</h2>

        <ol className="flex flex-col gap-10">
          <li>
            <article className="diary-article group relative flex flex-col gap-5 border-[1px] border-t-4 border-[#12372A] bg-white px-12 py-[50px] shadow-white before:left-[30px] before:top-[-20px] before:z-10 after:bottom-[-20px] after:right-[30px]">
              <header className="before:contents-[''] flex gap-5 before:absolute before:left-0 before:top-1 before:h-[1px] before:w-full before:bg-button">
                <h3 className="text-[18px] font-bold text-[#12372A]">
                  이는 청춘의 것은 그들의 운다. 이는 청춘의 것은 그들의 운다.이는 청춘의 것은 그들의 운다.이는 청춘의
                  것은 그들의 운다. 이는 청춘의 것은 그들의 운다.
                </h3>
                <time className="text-[#12372A]" dateTime="2023-02-24">
                  2023.02.24.THU
                </time>
              </header>
              <p className="text-[#12372A]">
                이는 청춘의 것은 그들의 운다. 동산에는 수 것이 있는 뼈 이상의 쓸쓸하랴? 없으면, 날카로우나 뛰노는 풀이
                아니다. 황금시대를 무한한 따뜻한 청춘이 같으며, 속잎나고, 운다. 위하여서 커다란 영락과 따뜻한 피고 안고,
                뼈 봄바람이다. 가는 곧 아니한 눈에 얼마나 있음으로써 지혜는 대한 얼마나 봄바람이다. 때까지 위하여 가지에
                열락의 것이다. 그림자는 꽃이 천하를 우리 찬미를 원대하고, 인생을 때에, 황금시대다. 목숨을 할지니, 청춘은
                용기가 말이다.
              </p>

              <div className="absolute bottom-[-20px] left-[calc(50%-107.39px/2)] hidden w-fit items-center gap-2 rounded-[100px] border-2 border-[#12372A] bg-white px-[10px] py-[5px] group-hover:flex">
                <button type="button">
                  <img src="/svg/icon-edit.svg" alt="수정" />
                </button>
                <span className="text-[#D8DDDE]">|</span>
                <button type="button">
                  <img src="/svg/icon-delete.svg" alt="삭제" />
                </button>
              </div>
            </article>
          </li>
        </ol>
      </section>
    </main>
  );
}
