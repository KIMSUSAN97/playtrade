const SellList = ({ posts }) => {
  const limitedPosts = posts ? posts.slice(0, 3) : [];

  return (
    <div>
      <h2>최신 게시글</h2>
      <ul>
        {limitedPosts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SellList;
