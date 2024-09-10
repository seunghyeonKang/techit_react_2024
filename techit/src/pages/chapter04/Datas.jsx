function Datas({ name, desc }) {
  return (
    <>
      <dt>{name}</dt>
      <dd>{desc}</dd>
    </>
  );
}

export default function DatasPage() {
  const items = [
    { id: 1, name: "Apple", desc: "빨간건 사과" },
    { id: 2, name: "Banana", desc: "바나나는 길어" },
    { id: 3, name: "Cherry", desc: "체리는 비싸" },
  ];

  const itemRendering = items.map((item) => {
    return <Datas {...item} key={item.id} />;
  });

  return <dl>{itemRendering}</dl>;
}
