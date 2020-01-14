<template>
  <div class="hello">
    <div id="login" v-if="login">
    <h1>Login</h1>
    <p>login</p>

      <div class="form-group">
        <input type="email" class="form-group" v-model="email" >
      </div>
      <div class="form-group">
        <input type="password" class="form-group" v-model="senha" >
      </div>
      <button @click="login = false"> Register </button>
      <button> Login </button>
    </div>
    <div id="login" v-if="!login">
      <h1>Register</h1>
      <p>cadastre-se</p>
        <div class="form-group">
          <input type="email" class="form-group" v-model="email" >
        </div>
        <div class="form-group">
          <input type="password" class="form-group" v-model="senha" >
        </div>
        <button @click="login = true"> Ja tenho login </button>
        <button> Login </button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Login',
  props: {
    msg: String
  },
  data() {
    return {
      email: "", senha: "", login: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item {
  cursor: pointer;
  color:red
}
.outros {
  cursor: none;

  color: blue
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
