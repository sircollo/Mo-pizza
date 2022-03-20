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

function Address(county, town, street) {
  this.county = county;
  this.town = town;
  this.street = street;
}

Address.prototype.fullAddress = function () {
  return this.street + ", " + this.town + " " + this.county;
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
var totalCost = 0;
var deliveryFee = 100;
var newAddress;
var street;
var town;
var subTopping = 0;
var county;
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


    var price = pizzaPrices.size;
    var crustPrice = crustPrices.crust;
    var newPizza = new PizzaOrder(size,price, crust, crustPrice);
    alert("wewe")
    var showToppings = [];
    var subTotal = 0;
    toppingCost = 0;

    $("#topping:checked").each(function () {
      showToppings.push($(this).val());
      var toppingPrice;

      if (size == "Small") {
        toppingPrice = smallTopPrices[$(this).val()];
      } else if (size == "medium") {
        toppingPrice = mediumTopPrices[$(this).val()];
      } else {
        toppingPrice = largeTopPrices[$(this).val()];
      }

      toppingCost += toppingPrice;

      var newTopping = new Topping($(this).val(), toppingPrice);
      newPizza.toppings.push(newTopping);
    });

    subTotal = subTotal + toppingCost;
    totalCost = totalCost + (newPizza.size.price + newPizza.crust.price + subTotal)

    $(".totalCost").text(totalCost);
    $("#order-body").append("<tr> <td></td> <td>" + newPizza.size.size + "</td><td>" +
      newPizza.crust.crustName + "</td><td  class='toppingCell'> " + showToppings + "</td><td>Ksh. " + (newPizza.size.price + newPizza.crust.price + subTotal) + "</td></tr>");

    $('#order-details').slideDown(500);

  }
});
// address form
$("form#address").submit(function (event) {
  event.preventDefault();

  street = $(".street").val();
  town = $(".town").val();
  county = $(".county").val();
  newAddress = new Address(street, town, county);


  $('.address-modal').hide();
  $('body').removeClass('modal-open');
  $('.modal-backdrop').remove();
  $(".addAddress").html('Delivery address added');
  $(".addAddress").attr("disabled", true);
  $(".checkout").attr("disabled", false);

  alert("Your Pizza Order will be delivered to " + newAddress.fullAddress());
});

});
$(document).ready(function(){
  $("button.checkout").click(function(event){
      var address;

      if(town === null)
      {
          $(".deliveryAddressRow").hide();
          $(".deliveryFeeRow").hide();
          $(".grandTotal").html("Ksh. " + (totalCost));
      }
  
      else
      {
          $(".deliveryAddress").html(newAddress.fullAddress());
          $(".deliveryAddressRow").show();
          $(".deliveryFeeRow").show();
          
          $(".deliveryFee").html("Ksh. " + (deliveryFee));
          $(".grandTotal").html("Ksh. " + (totalCost +deliveryFee));
      }

      $(".orderCost").html("Ksh. " + (totalCost));
      

    });
});



