import styles from "./BuyList.module.css";
import { Link } from "react-router-dom";

const BuyList = ({ posts }) => {
  // posts가 정의되어 있는지 확인한 후 slice를 호출
  const limitedPosts = posts ? posts.slice(0, 6) : [];

  return (
    <div className={styles.buyListContainer}>
      <h2>최신 게시글</h2>
      <div className={styles.cardContainer}>
        {limitedPosts.map((post) => (
          <div key={post.id} className={styles.card}>
            {/* 게시글 이미지를 표시하는 코드 추가 */}
            <img src={post.image} alt={`게시글 이미지 - ${post.title}`} />
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
