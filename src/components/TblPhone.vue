<template>
  <v-container>
    <v-simple-table width="100%">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-center">Phone</th>
            <th class="text-center">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-center" v-for="item in phones" :key="item.name">
            <td>{{ item.PhoneNumber }}</td>
            <td>
              <v-btn icon color="red">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
import PhoneService from "../services/PhoneService";

export default {
  name: "TblSchedule",
  props: ["client_id"],
  data() {
    return {
      phones: []
    };
  },
  methods: {
    findAllByClientId() {
      PhoneService.findByClientId(this.client_id).then(response => {
        this.phones = response.data;
      });
    }
  },
  created() {
    this.findAllByClientId();
  }
};
</script>
