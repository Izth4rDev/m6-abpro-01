<template>
     <tr v-for="fila in producto" :key="fila.name">
              <td>{{ fila.id }}</td>
              <td>{{ fila.name }}</td>
              <td>{{ fila.description }}</td>
              <td>{{ fila.price }}</td>
              <td>{{ fila.stock }}</td>
        </tr>
        <div class="card" style="width: 18rem;">
  <img src="" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
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


