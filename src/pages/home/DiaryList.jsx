import { useState, useEffect, useRef } from "react";
import { useFirestore } from "../../hooks/useFirestore";

export default function DiaryList({ diaries }) {
  const { deleteDocument, updateDocument } = useFirestore("diary");
  const [currentEditId, setCurrentEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");
  const textareaRef = useRef(null);

  const handleEditData = (event) => {
    if (event.target.id === "diary-title") {
      setEditTitle(event.target.value);
    } else if (event.target.id === "diary-content") {
      setEditContent(event.target.value);
    }
  };

  const handleEditStart = (item) => {
    setEditTitle(item.title);
    setEditContent(item.content);
    setCurrentEditId(item.id);
  };

  useEffect(() => {
    if (currentEditId && textareaRef.current) {
      const textarea = textareaRef.current;
      // 높이 조절
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [currentEditId, editContent]);

  const handleUpdate = async (e, item) => {
    e.preventDefault();
    setCurrentEditId(null);
    await updateDocument(item.id, { title: editTitle, content: editContent }); // ID와 새로운 제목, 내용 전달
  };

  return (
    <>
      {diaries.map((item) => {
        const createdDate = item.createdTime.toDate();
        const formattedDate = `${createdDate.getFullYear()}.${String(createdDate.getMonth() + 1).padStart(2, "0")}.${String(createdDate.getDate()).padStart(2, "0")}.${createdDate.toDateString().split(" ")[0].toUpperCase()}`;

        return (
          <li key={item.id}>
            {currentEditId === item.id ? (
              <form
                onSubmit={(e) => handleUpdate(e, item)}
                className="diary-article relative flex w-full flex-col gap-1 border-[1px] border-t-4 border-[#12372A] bg-white px-10 py-[48px] shadow-white before:left-[30px] before:top-[-20px] before:z-10 after:bottom-[-20px] after:right-[30px]"
              >
                <header className="before:contents-[''] flex w-full items-center justify-between gap-5 before:absolute before:left-0 before:top-1 before:h-[1px] before:w-full before:bg-button">
                  <label htmlFor="diary-title" className="a11y-hidden">
                    제목
                  </label>
                  <input
                    id="diary-title"
                    onChange={handleEditData}
                    value={editTitle}
                    className="w-full rounded-[5px] border-2 border-[#ADBC9F] p-2 text-[18px] font-bold text-[#12372A]"
                  />
                  <time className="w-fit text-[#12372A]" dateTime={formattedDate}>
                    {formattedDate}
                  </time>
                </header>
                <label htmlFor="diary-content" className="a11y-hidden">
                  내용
                </label>
                <textarea
                  id="diary-content"
                  ref={textareaRef}
                  className="w-full resize-none break-all rounded-[5px] border-2 border-[#ADBC9F] p-2 text-[#12372A]"
                  onChange={handleEditData}
                  cols="1"
                  value={editContent}
                />

                <button
                  type="submit"
                  className="absolute bottom-[-20px] left-[calc(50%-99.34px/2)] z-20 w-fit cursor-pointer items-center gap-2 rounded-[10px] border-2 border-[#12372A] bg-white px-[20px] py-[10px] font-bold hover:bg-primary hover:text-white"
                >
                  수정완료
                </button>
              </form>
            ) : (
              <article className="diary-article group relative flex flex-col border-[1px] border-t-4 border-[#12372A] bg-white px-10 py-[48px] shadow-white before:left-[30px] before:top-[-20px] before:z-10 after:bottom-[-20px] after:right-[30px]">
                <header className="before:contents-[''] flex items-center justify-between gap-5 before:absolute before:left-0 before:top-1 before:h-[1px] before:w-full before:bg-button">
                  <h3 className="p-2 text-[18px] font-bold text-[#12372A]">{item.title}</h3>
                  <time className="text-[#12372A]" dateTime={formattedDate}>
                    {formattedDate}
                  </time>
                </header>
                <p className="break-all p-2 text-[#12372A]">{item.content}</p>

                <div className="absolute bottom-[-20px] left-[calc(50%-107.39px/2)] z-20 hidden w-fit items-center gap-2 rounded-[100px] border-2 border-[#12372A] bg-white px-[10px] py-[5px] group-hover:flex">
                  <button type="button">
                    <img src="/svg/icon-edit.svg" alt="수정" onClick={() => handleEditStart(item)} />
                  </button>
                  <span className="text-[#D8DDDE]">|</span>
                  <button type="button" onClick={() => deleteDocument(item.id)}>
                    <img src="/svg/icon-delete.svg" alt="삭제" />
                  </button>
                </div>
              </article>
            )}
          </li>
        );
      })}
    </>
  );
}
