export class ProductsService {
  static products = [
    {
      "id": 1,
      "name": "Producto1",
      "desciption": "decripcion producto1",
      "price": "15000",
      "stock": "10", 
    },
    {
      "id": 2,
      "name": "Producto2",
      "desciption": "decripcion producto2",
      "price": "14000",
      "stock": "11", 
    },
  ];
  
  static getAllProducts() {
    return this.products;
  }

}