import itemsDummy from "./itemsDummy";
import "./style/style.css";

const Card = function ({ productName, price, thumbnailImg }) {
  const url = "http://test.api.weniv.co.kr/" + thumbnailImg;

  return (
    <li className="product-item">
      <div className="product-img">
        <img src={url} alt="img" />
      </div>
      <strong className="product-name sl-ellipsis">{productName}</strong>
      <button className="like-btn"></button>
      <div className="product-price">
        <strong className="price m-price">
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
    <main className="product">
      <ul className="product-list">
        <Product />
      </ul>
    </main>
  );
}
