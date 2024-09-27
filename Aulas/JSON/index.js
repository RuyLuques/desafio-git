// SEM JSON

 /*
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
*/

// COM JSON
/*
let invoice = {
    name: "Ana",
    age: 25,
    products: {
        0: ["Mouse", 29.99],
        1: ["Teclado", 129.99],
        2: ["Monitor", 829.99]
    },
    productsValues: [29.99, 129.99, 899.99]
};

// Chama a função
generateInvoice(invoice);

function generateInvoice(invoiceProducts) {
    // Acesse as propriedades do objeto invoiceProducts
    console.log(`O comprador é ${invoice.name}`);
    console.log(`A idade é ${invoice.age}`); // sem concatenação
    console.log("----------------");

    // Acesse os produtos e seus valores
    console.log("O produto é " + invoiceProducts.products[2][0]); // Nome do produto
    console.log("O valor é " + invoiceProducts.products[2][1]);   // Valor do produto
}

*/

// PERCORRER NOS OBJETOS
/*
let invoice = {
    name: "Ana",
    age: 25,
    products: {
        0: ["Mouse", 29.99],
        1: ["Teclado", 129.99],
        2: ["Monitor", 829.99]
    },
    productsValues: [29.99, 129.99, 899.99]
};

// Chama a função
generateInvoice(invoice);

function generateInvoice(invoice) {
    // Acesse as propriedades do objeto invoice
    console.log(`O comprador é ${invoice.name}`);
    console.log(`A idade é ${invoice.age}`);
    console.log("----------------");
    
    // Loop pelos produtos
    for (let index in invoice.products) {
        // Acessa nome e preço do produto
        let [productName, productPrice] = invoice.products[index];
        //console.log(`Produto: ${productName}, Preço: R$${productPrice.toFixed(2)}`);
        console.log(`- ${productName}: R$ ${productPrice}`) // aqui é interpolação de strings
    }
}
*/