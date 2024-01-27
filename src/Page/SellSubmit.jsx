import SellPost from "../Components/SellPost";
import { useState } from "react";

const BuySubmit = () => {
  const [posts, setPosts] = useState([]);

  // 게시글을 등록하고 목록을 업데이트하는 함수
  const handleAddPost = (newPost) => {
    // 이전 게시글 목록과 새로운 게시글을 합친 새로운 배열을 생성
    const updatedPosts = [...posts, newPost];

    // 새로운 배열로 게시글 목록을 업데이트
    setPosts(updatedPosts);
  };

  return (
    <div>
      <h2>최신 게시글</h2>
      <SellPost onAddPost={handleAddPost} />
      <div>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BuySubmit;
