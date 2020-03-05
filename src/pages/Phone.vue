<template>
  <v-container>
    <v-row>
      <v-col cols="12" xl="12" md="12" lg="12" sm="12" xs="12">
        <v-card>
          <v-card-text class="text--primary">
            <v-row>
              <v-card-title class="ma-auto">
                <p>
                  <v-icon size="66" color="blue-grey"
                    >mdi-account-circle
                  </v-icon>
                </p>
              </v-card-title>
            </v-row>
            <v-row>
              <v-card-title class="ma-auto">
                <h2 class="mt-n12 blue-grey--text">
                  {{ this.client.Name }}
                </h2>
              </v-card-title>
            </v-row>
            <v-row>
              <v-card-title class="ma-auto">
                <small class="mt-n12 font-weight-thin">{{
                  this.client.Email
                }}</small>
              </v-card-title>
            </v-row>
            <v-divider></v-divider>
            <tbl-phone :client_id="client_id"></tbl-phone>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ClientService from "../services/ClientService";
import TblPhone from "../components/TblPhone";

export default {
  name: "Phone",
  components: { TblPhone },
  data() {
    return {
      client: [],
      client_id: this.$route.params.client_id
    };
  },
  methods: {
    findById() {
      ClientService.findById(this.$route.params.client_id).then(response => {
        this.client = response.data;
      });
    }
  },
  created() {
    this.findById();
  }
};
</script>
