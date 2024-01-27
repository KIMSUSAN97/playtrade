import { useLocation } from "react-router-dom";

const BuyRead = () => {
  const location = useLocation();
  const { thumbnail, author, price, title, description, createdAt } =
    location.state;
  // createdAt.slice(0, 10)
  return (
    <div>
      <img
        src={`http://localhost:4000/${thumbnail}`}
        alt={`${title} img ${thumbnail}`}
      />
      <h3>{title}</h3>
      <p>{author}</p>
      <p>{createdAt.slice(0, 10)}</p>
      <p>{price}</p>
      <p>{description}</p>
    </div>
  );
};
export default BuyRead;
