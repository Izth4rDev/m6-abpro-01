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


<style>
card-title{
padding-top: 40px;
text-align: center;
font-family: 'Montserrat', sans-serif;
}

card-body{
padding-top: 40px;
text-align: center;
font-family: 'Montserrat', sans-serif;
}

input {
border: 1px solid #ccc;
border-radius: 4px;
padding: 8px;
width: 100%;
margin-bottom: 50px;
font-family: 'Montserrat', sans-serif;
}

.btn{
margin-top: 20px;
margin-bottom: 20px;
padding: 8px;
width: 100%;
}

button {
background-color: #007bff;
color: #fff;
text-decoration: none;
border-style: none;
padding: 10px 20px;
cursor: pointer;
font-family: 'Montserrat', sans-serif;
}

button:hover {
background-color: #0069d9;
}

.error {
color: red;
margin-top: 20px;
}
</style>