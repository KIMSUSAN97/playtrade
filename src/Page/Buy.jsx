import styles from "./Buy.module.css";
import BuyList from "../Components/BuyList";

const Buy = () => {
  const samplePosts = [
    {
      id: 1,
      title: "게시글 1",
      image: "url-to-image-1.jpg",
    },
    {
      id: 2,
      title: "게시글 2",
      image: "url-to-image-2.jpg",
    },
    {
      id: 3,
      title: "게시글 3",
      image: "url-to-image-3.jpg",
    },
    {
      id: 4,
      title: "게시글 4",
      image: "url-to-image-4.jpg",
    },
    {
      id: 5,
      title: "게시글 5",
      image: "url-to-image-5.jpg",
    },
    {
      id: 6,
      title: "게시글 6",
      image: "url-to-image-6.jpg",
    },
  ];

  return (
    <div className={styles.container}>
      <h1>구매</h1>
      {/* BuyList 컴포넌트에 posts prop을 전달 */}
      <BuyList posts={samplePosts} />
    </div>
  );
};
export default Buy;
