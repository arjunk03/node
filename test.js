console.log(__dirname);
console.log(__filename);

setTimeout(() => {
  console.log("time is toUpperCase");
}, 2000);

// -- clear timeout

function cart() {
  console.log("we are into cart fn");
}

var t = setTimeout(cart, 2000);
// clearTimeout(t);
//

console.log(t);

function printhello() {
  console.log("testsetse");
}

setInterval(printhello, 6000);
