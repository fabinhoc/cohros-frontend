<template>
  <v-container>
    <v-row>
      <v-col cols="12" xl="12" md="12" lg="12" sm="12" xs="12">
        <v-card>
          <v-card-text class="text--primary">
            <v-btn class="ma-2" to="/" color="success" dark>
              <v-icon dark>mdi-plus</v-icon> Add new
            </v-btn>
            <tbl-schedule></tbl-schedule>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TblSchedule from "../components/TblSchedule";
export default {
  name: "Cart",
  components: { TblSchedule },
  methods: {}
};
</script>
