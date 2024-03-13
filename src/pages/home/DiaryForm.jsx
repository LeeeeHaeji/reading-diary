import { useState, useEffect } from "react";
import { useFirestore } from "../../hooks/useFirestore";

export default function DiaryForm({ uid }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { addDocument, response } = useFirestore("diary");

  const handleData = (event) => {
    if (event.target.id === "diary-title") {
      setTitle(event.target.value);
    } else if (event.target.id === "diary-content") {
      setContent(event.target.value);
    }
  };

  useEffect(() => {
    if (response.success) {
      setTitle("");
      setContent("");
    }
  }, [response.success]);

  const handleSubmit = (event) => {
    event.preventDefault();
    addDocument({
      uid,
      title,
      content,
    });
  };

  return (
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
  );
}
