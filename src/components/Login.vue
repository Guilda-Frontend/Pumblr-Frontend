<template>
  <div class="hello">
    <div id="app">
  <v-app id="inspire">
    <v-content>
      <v-container
        fluid
        fill-height
      >
        <v-layout
          align-center
          justify-center
        >
          <v-flex
            xs12
            sm8
            md4
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      icon
                      large
                      target="_blank"
                      v-on="on"
                    >
                      <v-icon>mdi-code-tags</v-icon>
                    </v-btn>
                  </template>
                  <span>Source</span>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Login"
                    name="login"
                    v-model="form.login"
                    prepend-icon="mdi-account"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    v-model="form.pass"
                    prepend-icon="mdi-lock"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" 
                :disabled="!form.login || !form.pass"
                @click="logar">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</div>
    <!-- <div id="login" v-if="login">
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
      </div> -->
    </div>
</template>

<script>
import { login as makeLogin } from '@/services/auth'

export default {
  name: 'Login',
  props: {
    msg: String
  },
  data() {
    return {
     form: {
       login: null,
       pass: null
     }
    }
  },
  methods: {
    logar () {
      makeLogin(this.form)
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
