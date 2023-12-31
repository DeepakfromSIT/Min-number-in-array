let num = [10, 40, 50, 20, 30, 22, 144, 15, 23];

let ans = num.reduce((min, el) => {
  if (min < el) {
    return min;
  } else {
    return el;
  }
});
console.log(ans);
