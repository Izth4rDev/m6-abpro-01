<template>
    <section class="h-100" style="background-color: #eee;">
        <div class="container h-100 py-5">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-10">

                        <div class="d-flex justify-content-between align-items-center mb-4">
                        <h3 class="fw-normal mb-0 text-black">Shopping Cart</h3>
                        <div>
                            <p class="mb-0"><span class="text-muted">Sort by:</span> <a href="#!" class="text-body">price <i
                                class="fas fa-angle-down mt-1"></i></a></p>
                        </div>
                        </div>

                        <div class="card rounded-3 mb-4">
                            <div v-for="carro in newProducts" :key="carro.id" class="card-body p-4">
                                <div class="row d-flex justify-content-between align-items-center">
                                <div class="col-md-2 col-lg-2 col-xl-2">
                                    <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                                    class="img-fluid rounded-3" alt="Cotton T-shirt">
                                </div>
                                <div class="col-md-3 col-lg-3 col-xl-3">
                                    <p class="lead fw-normal mb-2">{{carro.name}}</p>
                                    <p><span class="text-muted">Size: </span>M <span class="text-muted">Color: </span>Grey</p>
                                </div>
                                <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                                    <button class="btn btn-link px-2"
                                    onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                    <i class="fas fa-minus"></i>
                                    </button>

                                    <input id="form1" min="0" name="quantity" value="2" type="number"
                                    class="form-control form-control-sm" />

                                    <button class="btn btn-link px-2"
                                    onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                    <i class="fas fa-plus"></i>
                                    </button>
                                </div>
                                <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                    <h5 class="mb-0">$499.00</h5>
                                </div>
                                <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                                    <a href="#!" class="text-danger"><i class="fas fa-trash fa-lg"> X </i></a>
                                </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-4">
                        <div class="card-body p-4 d-flex flex-row">
                            <div class="form-outline flex-fill">
                            <input type="text" id="form1" class="form-control form-control-lg" />
                            <label class="form-label" for="form1">Discound code</label>
                            </div>
                            <button type="button" class="btn btn-outline-warning btn-lg ms-3">Apply</button>
                        </div>
                        </div>

                        <div class="card">
                        <div class="card-body">
                            <button type="button" class="btn btn-warning btn-block btn-lg">Proceed to Pay</button>
                        </div>
                        </div>

                </div>
            </div>
        </div>
    </section>
     <!-- <tr v-for="fila in producto" :key="fila.name">
              <td>{{ fila.id }}</td>
              <td>{{ fila.name }}</td>
              <td>{{ fila.description }}</td>
              <td>{{ fila.price }}</td>
              <td>{{ fila.stock }}</td>
        </tr> -->
    <div class="container row">
        <div class="card col-3 mx-2 mt-4" v-for="fila in producto" :key="fila.name" style="width: 18rem;">
            <img src="" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{fila.name}}</h5>
                <p class="card-text">{{fila.description}}</p>
                <p class="card-text">{{fila.price}}</p> 
                <p class="card-text">{{fila.stock}}</p>
                <a href="#" v-on:click="registrarProducto(fila)" class="btn btn-primary">Agregar</a>
            </div>
        </div>
    </div>

</template>

<script>
import { ProductsService } from "@/services/productsService";
let newProducts = ['holi', 'holi', 'holi', 'holi','holi'];


export default {
  name: "UserList",
  data: function() {
    return {
      producto: ProductsService.getAllProducts()
    };
    },
    methods:{
        registrarProducto: function (producto){    
            let cantidad = 1;
            newProducts.push(producto.id,producto.name,producto.description,producto.price, cantidad);
        }
    }

}
  


</script>


