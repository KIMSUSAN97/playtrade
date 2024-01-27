import { useState } from "react";
import styles from "./BuyList.module.css";
import { Link, useNavigate } from "react-router-dom";

const BuyList = () => {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:4000/post/buy");
      const resData = await res.json();
      setData(resData);
    } catch (error) {
      console.error(error);
    }
  };
  if (!data) fetchData();
  return (
    <div className={styles.buyListContainer}>
      <h2>최신 게시글</h2>
      <div className={styles.cardContainer}>
        {data &&
          data.map((post, idx) => (
            <div
              key={idx}
              className={styles.card}
              onClick={(e) => {
                navigate(`/post/${post._id}`, { state: post });
              }}
            >
              {/* 게시글 이미지를 표시하는 코드 추가 */}
              <img
                src={`http://localhost:4000/${post.thumbnail}`}
                alt={`게시글 이미지 - ${post.title}`}
              />
              {/* 게시글 제목을 표시하는 코드 추가 */}
              <h3>{post.title}</h3>
            </div>
          ))}
      </div>
      <button>
        <Link to="/buysubmit">게시글 등록</Link>
      </button>
    </div>
  );
};

export default BuyList;
