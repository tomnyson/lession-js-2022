// Bai 1: tính tong cac so 0 - 100 chia het cho 3
function check(n) {
  if (n % 3 == 0) return true;
}
function tong(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    if (check(i)) {
      sum += i;
    }
    i++;
  }
  console.log("tong la : " + sum);
}
tong(100);
