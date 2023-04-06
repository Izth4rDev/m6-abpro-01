export class ProductsService {
  static products = [
    {
      "id": 1,
      "name": "Producto1",
      "description": "decripcion producto1",
      "price": "15000",
      "stock": "10", 
    },
    {
      "id": 2,
      "name": "Producto2",
      "description": "decripcion producto2",
      "price": "14000",
      "stock": "11", 
    },
  ];
  
  static getAllProducts() {
    return this.products;
  }

}

