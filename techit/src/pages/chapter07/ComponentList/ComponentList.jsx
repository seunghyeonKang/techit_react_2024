import ComponentDetail from "./ComponentDetail";
import productList from "./productListDummy";

export default function ComponentList() {
  return (
    <ul style={{ listStyle: "none", padding: "12px" }}>
      {productList.products.map((item) => {
        return <ComponentDetail key={item.id} {...item} />;
      })}
    </ul>
  );
}
