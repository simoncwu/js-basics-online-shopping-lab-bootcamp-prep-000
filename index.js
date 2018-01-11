var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 cart.push({ [item] : Math.floor(Math.random() * 99 + 1) });
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  let s = 'Your shopping cart is empty.';
  if (cart.length > 0) {
    s = 'In your cart, you have ';
    let sep = cart.length > 2 ? ', ' : ' ';
    for (let i = 0; i < cart.length; i++) {
      if (cart.length > 1) {
        if (i > 0) {
          s += sep;
          if (i == cart.length - 1) {
            s += 'and ';
          }
        }
      }
      let v = Object.entries(cart[i]);
      s += `${v[0][0]} at \$${v[0][1]}`;
    }
    s += '.';
  }
  console.log(s);
}

function total() {
  // write your code here
  let sum = 0;
  for (let i = 0; i < cart.length; i++) {
    sum += Object.entries(cart[i])[0][1];
  }
  return sum;
}

function removeFromCart(item) {
  // write your code here
  if (item.hasOwnProperty(item))
}

function placeOrder(cardNumber) {
  // write your code here
}
