<template>
    <headerComp></headerComp>
     <section class="carrito__compras">
        <div class="container h-100 py-5">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-12">
                        <div class="d-flex justify-content-between align-items-center mb-4">
                        <h3 class="fw-normal mb-0 text-black">Carrito de compra</h3>
                    <!-- <div>
                        <p class="mb-0"><span class="text-muted">Ordenado por:</span> <a href="#!" class="text-body">precio <i
                            class="fas fa-angle-down mt-1"></i></a></p>
                    </div> -->
                    </div>

                    <div class="card rounded-3 mb-4">
                        <div v-for="carro in newProducts" :key="carro.id" class="card-body p-4">
                            <div class="row d-flex justify-content-between align-items-center">
                            <div class="col-md-2 col-lg-2 col-xl-2">
                                <img v-bind:src="carro.image" class="img-fluid rounded-3" alt="Cotton T-shirt">
                            </div>
                            <div class="col-md-3 col-lg-3 col-xl-3">
                                <p class="lead fw-normal mb-2">{{carro.name}}</p>
                                <p><span class="text-muted">Descripcion: </span>{{ carro.description }}</p>
                            </div>
                            <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                                <button class="btn btn-link px-2"
                                onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                <i class="fas fa-minus"></i>
                                </button>

                                <input id="form1" min="0" name="quantity" v-model="carro.cantidad" v-on:click="calcularProducto(carro)" type="number"
                                class="form-control form-control-sm" />
                                
                                

                                <button class="btn btn-link px-2"
                                onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                <i class="fas fa-plus"></i>
                                </button>
                            </div>
                            <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                <h5 class="mb-0">{{carro.price}}-{{carro.total}}</h5>
                            </div>
                            <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                                <a href="#!" v-on:click="eliminarProducto(carro)" class="text-danger"><i class="fas fa-trash fa-lg"> X </i></a>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-body">
                            <button v-on:click="vaciarCarro" type="button" class="btn-vaciar">Vaciar Carrito</button>
                            <button type="button" class="btn-procesar">Procesar el pago</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

   <!-- Buscar productos    -->
   <div class="seccion__buscar">
         <input id="inputBuscador" v-model="inputBuscador" v-on:keyup="buscarProducto()" type="Buscar" class="form-control rounded" placeholder="Buscar" aria-label="Buscar" aria-describedby="search-addon"  />
        <button type="button" class="btn-buscar" v-on:click="buscarProducto()">Buscar</button>
    </div>

<div class="container-fluid row justify-content-center gap-3 ">
 <template  v-for="fila in producto" :key="fila.name">
        <div class="card col-3 mx-2 mt-4" v-if="fila.stock > 0" style="width: 18rem; margin: 3em;" >  
                <img v-bind:src="fila.image" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{fila.name}}</h5>
                    <p class="card-text">Material:{{fila.description}}</p>
                    <p class="card-text">$ {{fila.price}}</p> 
                    <p class="card-text">Stock: {{fila.stock}}</p>
                    <a href="#" v-on:click="registrarProducto(fila)" class="btn-agregar">Agregar</a>
                </div>
        </div>
    </template>
</div>
   
</template>

<script>

import headerComp from '../components/headerComp.vue'

export default {
   
    name: "productoPage",
    components:{
        headerComp
    },
    data: function() {
        return {
        producto: [],
        newProducts:[],
        productoTotal: [],
        inputBuscador: ''
        };
        },
    methods:{
        calcularProducto: function (elemento){
            elemento.total = elemento.cantidad*elemento.price;
            console.log (elemento.total)
        },
            registrarProducto: function (producto){    
                //retorna true o false si este objeto existe el arreglo
                let existe = this.newProducts.some((element)=>{ 
                    return producto.id == element.id
                });

            if(!existe){

                let product ={
                    id:producto.id,
                    name: producto.name,
                    description: producto.description,
                    price: producto.price,
                    stock: producto.stock,
                    image: producto.image,
                    cantidad: 1,
                    total: producto.price,
                }

                this.newProducts.push(product);

            }else{

                this.newProducts = this.newProducts.map((element)=>{

                    if(element.id === producto.id){

                        element.cantidad = element.cantidad+1; 
                        element.total = element.cantidad*element.price;
                        return element;

                    }else{
                        
                        return element;
                    }

                })
            }
            },
            eliminarProducto: function (producto){

            this.newProducts = this.newProducts.filter((element)=>{
                return element.id != producto.id;

            })
            },
            buscarProducto: function (){
                if (this.inputBuscador === ''){
                this.producto = this.productoTotal;
                }else {            
                
                const searchTerm = this.inputBuscador.toLowerCase();
                this.producto = this.producto.filter(element => {
                const name1 = element.name.toLowerCase();
                const description1 = element.description.toLowerCase();
            
            
                return name1.includes(searchTerm) || description1.includes(searchTerm) ;
                })
                }
                
            },
             vaciarCarro(){
               this.newProducts = []
            },
            async extraerData() {
                let resultado;
            try {
                const response = await fetch("../../data.json");
                if (!response.ok) {
                    throw new Error("No se pudo obtener el archivo de datos");
                }
                resultado = await response.json();
                return resultado;

                } catch (error) {
                    console.error(error);
                }
            }
        },
        async mounted() {
            this.producto = await this.extraerData();
            this.productoTotal = this.producto;
        }
 
    }
  
</script>

<style>
.card-title{
padding-top: 40px;
text-align: left;
font-family: 'Montserrat', sans-serif;
}

.card-body{
padding-top: 40px;
text-align: left;
font-family: 'Montserrat', sans-serif;
}

.btn-agregar{
background-color: #EA4C89;
border-radius: 8px;
border-style: none;
box-sizing: border-box;
color: #FFFFFF;
cursor: pointer;
display: inline-block;
font-size: 14px;
font-weight: 500;
height: 40px;
line-height: 20px;
list-style: none;
margin: 0;
margin-top: auto;
outline: none;
padding: 10px 16px;
position: relative;
text-align: center;
text-decoration: none;
transition: color 100ms;
vertical-align: baseline;
user-select: none;
-webkit-user-select: none;
touch-action: manipulation;
font-family: 'Montserrat', sans-serif;
}

.btn-agregar:hover,
.btn-agregar:focus {
background-color: #F082AC;
color: #424242;
font-family: 'Montserrat', sans-serif;
}

.seccion__buscar{
display: flex;
padding-left: 5.5em;
padding-right: 7em;
}

.btn-buscar{
width: 10em;
border-radius: 2px;
background-color: #F082AC;
color: #ffffff;
text-align: center;
/* padding: 1.1em; */
/* margin-bottom: 5em; */
font-family: 'Montserrat', sans-serif;
cursor: pointer;
}

.btn-procesar,
.btn-vaciar{
width: 30em;
border-radius: 2px;
background-color: #F082AC;
color: #ffffff;
text-align: center;
font-family: 'Montserrat', sans-serif;
cursor: pointer;
}

.btn-buscar:hover,
.btn-buscar:focus,
.btn-procesar:hover,
.btn-procesar:focus{
background-color: #ef8db3;
color: #424242; 
}

.btn-vaciar{
    margin-right: 18em;
}

.carrito__compras{
font-family: 'Montserrat', sans-serif;
}

</style>