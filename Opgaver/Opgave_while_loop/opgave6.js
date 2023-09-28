let fbnci = [0, 1];
let i = 1;

while(fbnci[i] < 1000) {
  fbnci.push(fbnci[i] + fbnci[i-1]);
  i++;
}

console.log(fbnci[i]);