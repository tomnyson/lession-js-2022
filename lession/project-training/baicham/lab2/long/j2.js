// tính tổng các sô chia het cho 2 loai chu 10
function check(n) {
  if (n % 2 == 0) return true;
}
function tong(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    if (check(i) && i != 10) {
      sum += i;
    }
    i++;
  }
  console.log("tong la : " + sum);
}
tong(100);
