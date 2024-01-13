import Wall from "/Wall.jpg";
import Login from "../Item/Login";

const Home = () => {
  const containerStyle = {
    position: "relative",
    textAlign: "center",
  };

  const wallStyle = {
    width: "100%",
    marginTop: "30px",
    height: "800px",
    display: "block",
  };

  const overlayTextStyle = {
    position: "absolute",
    top: "50%",
    left: "20%",
    transform: "translate(-50%, -50%)",
    color: "white",
    fontSize: "120px",
    textAlign: "left",
  };

  const formStyle = {
    position: "absolute",
    top: "50%",
    left: "80%",
    transform: "translate(-50%, -50%)",
    padding: "20px",
    background: "rgba(255, 255, 255, 0.5)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "400px",
    height: "400px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "1px solid #fff",
  };

  return (
    <div style={containerStyle}>
      <img style={wallStyle} src={Wall} alt="Wall" />
      <div style={overlayTextStyle}>
        <p>
          아이템 거래는
          <br />
          안전하게
          <br />
          PlAY TRADE
          <br />
          에서
        </p>
      </div>
      <div style={formStyle}>
        <Login></Login>
      </div>
    </div>
  );
};

export default Home;
