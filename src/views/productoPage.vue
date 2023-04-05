<template>
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
                <h5 class="card-title">{{ fila.name }}</h5>
                <p class="card-text">{{ fila.description}}</p>
                <p class="card-text">{{ fila.price }}</p> 
                <p class="card-text">{{ fila.stock }}</p>
                <a href="#" class="btn btn-primary">Agregar</a>
            </div>
        </div>
    </div>

</template>

<script>
import { ProductsService } from "@/services/productsService";
export default {
  name: "UserList",
  data: function() {
    return {
      producto: ProductsService.getAllProducts()
    };
  }
};
</script>


