import itemsDummy from "./itemsDummy";
import styles from "./style/style.module.css";

const Card = function ({ productName, price, thumbnailImg }) {
  const url = "http://test.api.weniv.co.kr/" + thumbnailImg;

  return (
    <li className={styles["product-item"]}>
      <div className={styles["product-img"]}>
        <img src={url} alt="img" />
      </div>
      <strong className={`${styles["product-name"]} ${styles["sl-ellipsis"]}`}>
        {productName}
      </strong>
      <button className={styles["like-btn"]}></button>
      <div className={styles["product-price"]}>
        <strong className={`${styles["price"]} ${styles["m-price"]}`}>
          {price}
          <span>원</span>
        </strong>
      </div>
    </li>
  );
};

const Product = function () {
  return (
    <>
      {itemsDummy.map((item) => {
        return <Card {...item} key={item.id} />;
      })}
    </>
  );
};

export default function SellGoods() {
  return (
    <main className={styles["product"]}>
      <ul className={styles["product-list"]}>
        <Product />
      </ul>
    </main>
  );
}
