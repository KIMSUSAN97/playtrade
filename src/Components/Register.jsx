import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Register.module.css";

const Register = () => {
  const navigate = useNavigate(); // 이름 상태 관리 함수 선언 및 초기화 코드 작성 �
  const [name, setName] = useState(""); // 이름 상태 관리 함수 선언 및 초기화 코드 작성 위치 지정 및 상태 관리 함수 선언 및 초기화 코드 작성 위치 지정 및 상태 관리 함수 선언 및 초기화 코드 작성 위치 지정 및 상태 관리 함수 선언 및 초기화)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickName] = useState("");

  const handleRegister = async () => {
    try {
      const response = await fetch("http://localhost:4000/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          name,
          email,
          password,
          nickname,
        }).toString(),
      });

      if (response.ok) {
        console.log("회원가입 성공");
        navigate("/");
      } else {
        console.log("회원가입 실패");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>회원가입</h1>
      <input
        className={styles.input}
        type="text"
        placeholder="이름"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className={styles.input}
        type="text"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className={styles.input}
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        className={styles.input}
        type="text"
        placeholder="닉네임"
        value={nickname}
        onChange={(e) => setNickName(e.target.value)}
      />
      <button className={styles.button} onClick={handleRegister}>
        회원가입
      </button>
    </div>
  );
};

export default Register;
