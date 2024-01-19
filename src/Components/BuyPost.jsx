import { useState } from "react";

const BuyPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      id: new Date().getTime(),
      title,
      content,
    };

    onAddPost(newPost);
    setTitle("");
    setContent("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        제목:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <br />
      <label>
        내용:
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">게시글 등록</button>
    </form>
  );
};

export default BuyPost;
