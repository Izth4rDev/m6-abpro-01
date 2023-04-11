<template>  
    <div class="container-fluid d-flex justify-content-around align-items-center border">
        <div id="logo">
            <a v-on:click="Home"><img src="../assets/logo-p.png" alt="" width="250"></a>
        </div>
        <div class="d-flex">
            <nav>
                <ul id="list-contenedor" class="d-flex justify-content-around">
                    <router-link class="nav-link px-3" to="/HomeRoot">Inicio</router-link>
                    <router-link class="nav-link px-3" to="/productoPage">Productos</router-link>
                    <!-- <router-link class="nav-link px-3" to="/">Login</router-link> -->
                </ul>
            </nav>
        </div>
    </div>
</template>


<script>
export default {
    data (){

    },
    methods:{
        Home(){
            this.$router.push('/HomeRoot');
        }
    }
}
</script>


<style>
.titulo__pagina{
font-family: 'Montserrat', sans-serif;
padding-bottom: 1em;
}

#login{
    cursor: pointer;
}

#list-contenedor{
    list-style-type: none;

}

.list-item{

    cursor: pointer;

}
</style>