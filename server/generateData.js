var faker = require('faker');

var database = { productos: []};

for (var i = 1; i<= 10; i++) {
  database.productos.push({
    id: i,
    nombre: faker.commerce.productName(),
    descripcion: faker.lorem.sentences(),
    precio: faker.commerce.price(),
    imagenUrl: "https://source.unsplash.com/1600x900/?product",
    cantidad: faker.datatype.number()
  });
}

console.log(JSON.stringify(database));
