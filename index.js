var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var price = Math.floor(Math.random() * 100);
  cart.push(new Object({"itemName" : itemName, "itemPrice" : price}));
  return(`${itemName} has been added to your cart.`);

}

function viewCart() {
  var statement;
  if (cart == 0) {
    statement = "Your shopping cart is empty.";
  }
    else {
      statement = "In your cart, you have ";
      for (var i = 0; i < cart.length; i++){
        if(i == 0){
          statement = statement + `${itemName} at ${itemPrice}`;
        } else if(i == cart.length - 1){
          statment = statement + `, and ${itemName} at ${itemPrice}.`;
        } else {
          statment = statment + `, and ${itemName} at ${itemPrice}`;
        }

      }
  }
  return statement;
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
