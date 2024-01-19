import dnf from "/dnf.png";
import loa from "/loa.png";
import maple from "/maple.png";
import styles from "./Intro.module.css";

const Intro = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>PLAY TRADE에 오신 것을 환영합니다!</h1>
      <p className={styles.paragraph}>
        <br />
        불법 현금 거래를 사용하기 싫으신 분,
        <br />타 메신저를 이용하기에 힘드신 분,
        <br />
        필요한 아이템을 찾기 힘드신 분,
      </p>
      <img src={maple} alt="maple" className={styles.maple} />
      <img src={loa} alt="loa" className={styles.loa} />
      <img src={dnf} alt="dnf" className={styles.dnf} />
    </div>
  );
};

export default Intro;
