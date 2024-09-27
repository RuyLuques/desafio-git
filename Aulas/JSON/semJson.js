// SEM JSON

let name = "Ana";
let age = 25;
let products = ["Mouse", "Teclado", "Monitor 3"];
let productsValues = [29.99, 129.99, 899.99];

function generateInvoice(name, products, productsValues, age) {
  console.log("O comprador é " + name);
  console.log("A idade é " + age);
  console.log("----------------");
  console.log("O produto é " + products[2]);
  console.log("O valor é " + productsValues[2]);
}

// Chama a função
generateInvoice(name, products, productsValues, age);

