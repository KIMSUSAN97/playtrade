import { useState } from "react";
// import styles from "./BuyPost.module.css";

const SellPost = () => {
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
    <form onSubmit={handleSubmit} /*className={styles.postForm}*/>
      <label>
        제목:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          /*className={styles.inputField}*/
        />
      </label>
      <br />
      <label>
        내용:
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          /*className={styles.textareaField}*/
        />
      </label>
      <br />
      <button type="submit" /*className={styles.submitButton}*/>
        게시글 등록
      </button>
    </form>
  );
};

export default SellPost;
