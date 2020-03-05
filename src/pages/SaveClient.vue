<template>
  <v-container>
    <v-row>
      <v-col cols="12" xl="12" md="12" lg="12" sm="12" xs="12">
        <v-card>
          <v-card-text class="text--primary">
            <v-row>
              <v-col cols="6">
                <v-text-field
                  v-model="Name"
                  :rules="nameRules"
                  label="Name"
                  placeholder=" "
                  required
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="Email"
                  :rules="emailRules"
                  label="E-mail"
                  placeholder=" "
                  required
                  outlined
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="Address"
                  label="Address"
                  placeholder=" "
                  outlined
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-btn class="ma-2" color="success" dark>
                  Save
                </v-btn>
                <v-btn class="ma-2" to="/" color="warning" dark>
                  cancel
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "SaveClient",
  data() {
    return {
      Name: "",
      nameRules: [v => !!v || "Name is required"],
      Email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      Address: ""
    };
  }
};
</script>
