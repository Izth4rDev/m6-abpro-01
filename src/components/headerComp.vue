<template>  
    <div class="container-fluid d-flex justify-content-around align-items-center border border-1 border-primary">
        <div id="logo">
            <h2 class="text-primary">LOGO</h2>
        </div>
        <div class="d-flex">
            <nav>
                <ul id="list-contenedor" class="d-flex justify-content-around">
                    <router-link class="nav-link px-3" to="/HomeRoot">Inicio</router-link>
                    <router-link class="nav-link px-3" to="/productoPage">Productos</router-link>
                    <router-link class="nav-link px-3" to="/">Login</router-link>
                </ul>
            </nav>
        </div>
    </div>
</template>


<script>

</script>


<style>
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