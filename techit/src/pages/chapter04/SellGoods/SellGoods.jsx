import itemsDummy from "./itemsDummy";
import style from "./style/style.module.css";

const Card = function ({ productName, price, thumbnailImg }) {
  const url = "http://test.api.weniv.co.kr/" + thumbnailImg;

  return (
    <li className={style["product-item"]}>
      <div className={style["product-img"]}>
        <img src={url} alt="img" />
      </div>
      <strong className={`${style["product-name"]} ${style["sl-ellipsis"]}`}>{productName}</strong>
      <button className={style["like-btn"]}></button>
      <div className={style["product-price"]}>
        <strong className={`${style["price"]} ${style["m-price"]}`}>
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
    <main className={style["product"]}>
      <ul className={style["product-list"]}>
        <Product />
      </ul>
    </main>
  );
}
