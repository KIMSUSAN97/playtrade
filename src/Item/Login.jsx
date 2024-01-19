import { Link } from "react-router-dom";

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

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // 로그인 로직 추가
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
        <Link to="/register">
          <button style={buttonStyle} type="submit">
            회원가입
          </button>
        </Link>
      </form>
    </>
  );
};

export default Login;
