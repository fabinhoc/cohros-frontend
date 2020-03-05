<template>
  <v-container>
    <v-row>
      <v-col cols="12" xl="12" md="12" lg="12" sm="12" xs="12">
        <v-card>
          <v-card-text class="text--primary">
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-row>
                <v-col cols="12">
                  <v-alert
                    border="top"
                    colored-border
                    type="info"
                    elevation="2"
                    v-if="resultMessage"
                  >
                    {{ resultMessage }}
                  </v-alert>
                </v-col>
              </v-row>
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
                  <v-btn class="ma-2" color="success" @click="validate" dark>
                    Save
                  </v-btn>
                  <v-btn class="ma-2" to="/" color="warning" dark>
                    cancel
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ClientService from "../services/ClientService";

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
      Address: "",
      valid: false,
      resultMessage: ""
    };
  },
  methods: {
    saveClient() {
      let data = { Name: this.Name, Email: this.Email, Address: this.Address };
      ClientService.save(data).then(response => {
        if (response.status == 200) {
          this.resultMessage = "Saved with success!";
          setTimeout(() => {
            this.resultMessage = "";
          }, 3000);
        } else {
          this.resultMessage = response.message;
        }
      });
    },
    editClient() {
      let data = { Name: this.Name, Email: this.Email, Address: this.Address };
      ClientService.edit(data, this.$route.params.id).then(response => {
        if (response.status == 200) {
          this.resultMessage = "Saved with success!";
          setTimeout(() => {
            this.resultMessage = "";
          }, 3000);
        } else {
          this.resultMessage = response.message;
        }
      });
    },
    findById() {
      if (this.$route.params.id) {
        ClientService.findById(this.$route.params.id).then(response => {
          this.Name = response.data.Name;
          this.Email = response.data.Email;
          this.Address = response.data.Address;
        });
      }
    },
    validate() {
      if (this.$refs.form.validate()) {
        if (this.$route.params.id) {
          this.editClient();
        } else {
          this.saveClient();
        }
      } else {
        this.valid = false;
      }
    }
  },
  created() {
    this.findById();
  }
};
</script>
