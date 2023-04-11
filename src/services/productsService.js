export class ProductsService {
  static products = [
    {"id": 1,
    "name": "Poleron rana",
    "description": "material de algodon",
    "price": 18000,
    "stock": 20,
    "image": "https://http2.mlstatic.com/D_NQ_NP_974756-CBT44451545135_122020-O.jpg"},
    
    {"id": 2,
    "name": "Poleron gato",
    "description": "material de algodon",
    "price": 18000,
    "stock": 20,
    "image":"https://img.ltwebstatic.com/images3_pi/2021/10/18/1634524899557a141a3467abb10e93b400227cde82_thumbnail_600x.webp"},

    {"id": 3,
    "name": "Pijama rana",
    "description": "material de algodon",
    "price": 20000,
    "stock": 20,
    "image":"https://http2.mlstatic.com/D_NQ_NP_2X_967261-MLC54273947147_032023-F.webp"},

    {"id": 4,
    "name": "Antifaz rana",
    "description": "material de polar",
    "price": 10000,
    "stock": 20,
    "image": "https://http2.mlstatic.com/D_NQ_NP_2X_752649-MLC32333189855_092019-F.webp"},

    {"id": 5,
    "name": "Gorro pescador rana",
    "description": "material de algodon",
    "price": 10000,
    "stock": 15,
    "image": "https://http2.mlstatic.com/D_NQ_NP_2X_937087-MLC48482335695_122021-F.webp"},

    {"id": 6,
    "name": "Monedero de rana",
    "description": "material de polar y algodon",
    "price": 7000,
    "stock": 10,
    "image": "https://http2.mlstatic.com/D_NQ_NP_2X_799247-MLC48897794738_012022-F.webp"},

    {"id": 7,
    "name": "Gorro para mascotas",
    "description": "material de lana",
    "price": 7000,
    "stock": 10,
    "image": "https://http2.mlstatic.com/D_NQ_NP_2X_857765-MLC51407509473_092022-F.webp"},

    {"id": 8,
    "name": "Juego de tazas ranita",
    "description": "material de porcelana",
    "price": 7000,
    "stock": 10,
    "image": "https://cdnx.jumpseller.com/shakriss-store/image/21172635/resize/1080/1080?1639257524"},

    {"id": 9,
    "name": "Libro Sapo y Sepo",
    "description": "literatura infantil",
    "price": 7000,
    "stock": 10,
    "image": "https://falabella.scene7.com/is/image/Falabella/gsc_112976183_476928_1?wid=1500&hei=1500&qlt=70"},

    {"id": 10,
    "name": "Collar de rana",
    "description": "material de acero quirurgico",
    "price": 7000,
    "stock": 10,
    "image": "https://http2.mlstatic.com/D_NQ_NP_2X_796283-MLA45059406031_032021-F.webp"},
];




  
  static getAllProducts() {
    return this.products;
  }

}

