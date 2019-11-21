var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({itemName: item, itemPrice: (Math.floor(Math.random() * 100) + 1) });
 return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  }

  var arr = [];
  let i = 0;

  while(i < cart.length) {
    arr.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
    i++;
  }

  if(arr[1] !== undefined) {
    arr[arr.length -1] = "and " + arr[arr.length -1];
  }

  let list = arr.join(', ');
  return `In your cart, you have ${list}.`;
}

function total() {
  let i = 0, a = 0;

  while(i < cart.length) {
    a = cart[i].itemPrice + a;
    i++;
  }
  return a;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
