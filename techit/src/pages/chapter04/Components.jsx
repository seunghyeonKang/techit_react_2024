function Component01() {
  return (
    <div>
      <h3>Component1</h3>
      <p>첫 번째 컴포넌트입니다.</p>
    </div>
  );
}

function Component02() {
  return (
    <div>
      <h3>Component2</h3>
      <p>두 번째 컴포넌트입니다.</p>
    </div>
  );
}

function Component(props) {
  return (
    <div>
      <h3>Component{props.num}</h3>
      <p>{props.num}번째 컴포넌트입니다.</p>
    </div>
  );
}

function HelloProps(props) {
  return (
    <div>
      <h3>HelloProps</h3>
      <p>{props.name}</p>
      <p>{props.age}</p>
      <p>{props.someFunc()}</p>
      <p>{[...props.someArr]}</p>
      <p>{props.someObj.one}</p>
      {props.someJSX}
    </div>
  );
}

export default function Components() {
  return (
    <div>
      <Component01 />
      <Component02 />
      <Component num="3" />
      <HelloProps
        name="seung"
        age={30}
        someFunc={() => "hello!"}
        someJSX={<img src="https://picsum.photos/id/237/300/200" alt="img" />}
        someArr={[1, 2, 3]}
        someObj={{ one: 1 }}
      />
    </div>
  );
}
