// Bài  5 Tính tích 1 - N
function Tich(n) {
  let sum = 1;
  for (let i = 1; i <= n; i++) {
    sum *= i;
    i++;
  }
  console.log("tich la : " + sum);
}

Tich(100);
