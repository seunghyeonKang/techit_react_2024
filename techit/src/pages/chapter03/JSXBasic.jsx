import "./JSXBasic.css";

export default function JSXBasic() {
  const name = "라이켓";
  const someStyle = { backgroundColor: "seagreen", color: "black" };

  return (
    <div>
      <h1 style={{ backgroundColor: "seagreen", color: "white" }}>안녕, {name} 1호</h1>
      <h1 style={someStyle}>안녕, {name} 2호</h1>
      <div className="newClass" />

      {name ? "name=true" : "name=false"}
    </div>
  );
}
