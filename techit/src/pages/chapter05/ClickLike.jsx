export default function ClikeLike() {
  let like = 0;
  function clickLike() {
    like += 1;
  }
  return (
    <>
      <button onClick={clickLike}>
        like <span>{like}</span>
      </button>
    </>
  );
}
