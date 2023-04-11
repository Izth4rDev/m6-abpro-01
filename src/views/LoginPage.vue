<template>
<div>
    <div class="img"><img alt="Vue logo" src="../assets/logo.png" width="100"/></div>
    <h2>Iniciar sesión</h2>
    <form @submit.prevent="login">
    <div>
        <label for="email">Correo electrónico:</label>
        <input type="email" id="email" v-model="email" placeholder="ejemplo@mail.cl" required>
    </div>
    <div>
        <label for="password">Contraseña:</label>
        <input type="password" id="password" v-model="password" placeholder="tu contraseña" required>
    </div>
    </form>    
    <div class="btn"><button type="submit" v-on:click="login()">Iniciar sesión</button></div>
    <div v-if="error" class="error">{{ error }}</div>
</div>
</template>

<script>
export default {
data() {
    return {
    email: '',
    password: '',
    error: '',
    };
},
methods: {
     async login() {
        let resultado;
        try {
            const response = await fetch("../../users.json");
            if (!response.ok) {
                throw new Error("No se pudo obtener el archivo de datos");
            }

            resultado = await response.json();
            console.log(resultado[0].correo)

            if (this.password === resultado[0].password && this.email === resultado[0].correo) {
                this.error = 'Inicio de sesión exitoso!'
                this.clase = 'success'
                this.$router.push('/HomeRoot');
            } else {
                this.error = 'Error de autenticación. Por favor, verifica tus datos.';
                this.clase = 'error'
            }

            } catch (error) {
                console.error(error);
            }

        },
    },
};
</script>

<style>
h2{
padding-top: 40px;
text-align: center;
font-family: 'Montserrat', sans-serif;
}
form {
padding-left: 50px;
padding-right: 50px;
}

label {
display: block;
margin-bottom: 10px;
margin-top: 30px;
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
background-color: #EA4C89;
border-radius: 8px;
border-style: none;
box-sizing: border-box;
color: #FFFFFF;
cursor: pointer;
display: inline-block;
font-size: 14px;
font-weight: 500;
height: 50px;
width: 20em;
line-height: 20px;
list-style: none;
margin: 0;
margin-top: auto;
outline: none;
padding: 10px 20px;
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

button:hover {
background-color: #F082AC;
color: #424242;
font-family: 'Montserrat', sans-serif;
}

.error {
color: red;
margin-top: 20px;
}
.img{
    text-align: center;
    padding-top: 5em;
}
</style>
