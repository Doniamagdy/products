//1- Create an empty array

var productsArray3 = [];

//2- declare variables as get element by id

var productName3 = document.getElementById("productName3");
var productPrice3 = document.getElementById("productPrice3");
var productDescription3 = document.getElementById("productDescription3");

//8- check if the local storage has values or no

if (localStorage.getItem("products3") != null) {
  //9- convert the array back to object

  productsArray3 = JSON.parse(localStorage.getItem("products3"));

  //10- recall the display product function again
  displayProducts3();
}

//3- create an object to push its element inside the array

function getProduct3() {
  var productsObject3 = {
    //key--> value
    pName: productName3.value,
    price: productPrice3.value,
    description: productDescription3.value,
  };

  //5- push object element inside the array
  productsArray3.push(productsObject3);

  //6- save the elements inside local storage

  localStorage.setItem("products3", JSON.stringify(productsArray3));
  //7- invoke display product function
  displayProducts3();

  clear3();
}

//4- create for loop to display products
function displayProducts3() {
  var newProduct3 = " ";

  for (var i = 0; i < productsArray3.length; i++) {
    newProduct3 += `
        <div class="col-sm-12 col-md-4 col-lg-4">
        <div class=" shadow text-center">
            <h3>${productsArray3[i].pName}</h3>
            <p>${productsArray3[i].price}</p>
            <p>${productsArray3[i].description}</p>
        </div>
    </div>
        `;
  }
  document.getElementById("product_card").innerHTML = newProduct3;
}

function clear3() {
  productName3.value = "";
  productPrice3.value = "";
  productDescription3.value = "";
}
