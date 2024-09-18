import title from "../../images/title.png";
import subtitle from "../../images/txt_subtitle.png";
// import "./Header.css";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header>
      {/* title-law */}
      <h1 className={styles["tit-law"]}>
        <img className="img-tit" src={title} alt="1만 시간의 법칙" />
      </h1>
      <img
        className={styles["img-txt"]}
        src={subtitle}
        alt="연습은 어제의 당신보다 당신을 더 낫게 만든다."
      />
      {/* text-description */}
      <p className={styles["txt-desc"]}>
        <strong className={styles["tit-desc"]}>1만 시간의 법칙</strong>은<br />
        어떤 분야의 전문가가 되기 위해서는
        <br />
        최소한 1만 시간의 훈련이 필요하다는 법칙이다.
      </p>
    </header>
  );
}
