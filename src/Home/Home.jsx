import Wall from "/Users/gimsusan/Desktop/playtrade front/front/src/Wall.jpg";

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

  const inputStyle = {
    width: "300px",
    height: "40px",
    margin: "20px",
    padding: "8px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const buttonStyle = {
    width: "300px",
    margin: "10px",
    padding: "10px",
    borderRadius: "5px",
    background: "#118cfd",
    color: "white",
    border: "none",
    cursor: "pointer",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
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
        <form>
          <label>
            <input style={inputStyle} type="text" placeholder="아이디" />
          </label>
          <br />
          <label>
            <input style={inputStyle} type="password" placeholder="비밀번호" />
          </label>
          <br />
          <button style={buttonStyle} type="submit">
            로그인
          </button>
          <button style={buttonStyle} type="submit">
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
