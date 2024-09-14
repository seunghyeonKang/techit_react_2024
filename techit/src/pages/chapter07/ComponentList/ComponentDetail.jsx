export default function ComponentDetail({ title, price }) {
  return (
    <li>
      <h3>{title}</h3>
      <p>{price}원</p>
    </li>
  );
}
