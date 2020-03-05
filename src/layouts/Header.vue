<template>
  <v-app-bar :light="true" color="blue" app dark>
    <v-container>
      <v-row class="pt-5">
        <router-link to="/">
          <v-toolbar-title>
            <v-img
              width="100"
              class="text-center mt-3"
              src="../assets/logo.png"
            ></v-img>
          </v-toolbar-title>
        </router-link>

        <v-toolbar-title class="ma-auto"
          ><h2 class="font-weight-light text-uppercase">
            Scheduling control
          </h2></v-toolbar-title
        >
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header"
};
</script>
