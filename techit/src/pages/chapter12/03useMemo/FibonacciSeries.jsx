// var N = 6;
// var memory = Array(N + 1).fill(0);

// function fn(n) {
//   if (n === 1 || n === 2) {
//     memory[n] = 1;
//     return 1;
//   } else if (memory[n] !== 0) {
//     return memory[n];
//   } else {
//     memory[n] = fn(n - 1) + fn(n - 2);
//     return memory[n];
//   }
// }

function fn(n) {
  if (n === 1 || n === 2) {
    return 1;
  } else {
    return fn(n - 1) + fn(n - 2);
  }
}

export default function FibonacciSeries() {
  const num = fn(6);

  return (
    <>
      <p>{num}</p>
    </>
  );
}
