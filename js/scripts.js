function PizzaOrder(size, price, crust, crustPrice) {
  this.size = {
    size: size,
    price: price,
  };
  this.crust = {
    crustName: crust,
    price: crustPrice,
  };
  this.toppings = [];
}

function Topping(name, price) {
  this.toppingName = name;
  this.price = price;
}
var toppingCost = 0;
var pizzaPrices = {
  Small: 500,
  medium: 800,
  large: 1200,
};
var crustPrices = {
  crispy: 100,
  stuffed: 150,
  Glutten_Free: 200,
};
var smallTopPrices = {
  beef: 120,
  chicken: 130,
  mushroom: 150,
  herbs: 100,
};

var mediumTopPrices = {
  beef: 170,
  chicken: 170,
  mushroom: 200,
  herbs: 120,
};
var largeTopPrices = {
  beef: 250,
  chicken: 250,
  mushroom: 300,
  herbs: 150,
};



$(document).ready(function (event) {
  //form validation
  $("#new-order").submit(function (event) {
    event.preventDefault();

    var checkBoxes = document.getElementsByClassName("form-check-input");
    var isChecked = false;
    for (var i = 0; i < checkBoxes.length; i++) {
      if (checkBoxes[i].checked) {
        isChecked = true;
      }
    }

    if (!isChecked) {
      alert("Choose a Topping");
    } else {
      $(".order-button", this).text("Continue Shopping");
    }
  });
});
