<template>
<div>
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
    <div class="btn"><button type="submit">Iniciar sesión</button></div>
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
    login() {
    if (this.password === 'password') {
        console.log('Inicio de sesión exitoso!');
    } else {
        this.error = 'Error de autenticación. Por favor, verifica tus datos.';
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