<template>  
    <form v-on:submit.prevent>
    <div class="mb-3">
        <label for="user" class="form-label">Usuario</label>
        <input type="text" class="form-control" id="user" aria-describedby="emailHelp">
    </div>
    <div class="mb-3">
        <label for="contraseña" class="form-label">contraseña</label>
        <input type="password" class="form-control" id="contraseña">
    </div>
    <button type="submit" class="btn btn-primary">Aceptar</button>
    </form>
</template>


<script>

</script>


<style>

</style>