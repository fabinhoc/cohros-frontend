<template>
  <v-container>
    <v-simple-table width="100%">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-center">NAME</th>
            <th class="text-center">EMAIL</th>
            <th class="text-center">ADDRESS</th>
            <th class="text-center">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-center" v-for="item in clients" :key="item.name">
            <td>{{ item.Name }}</td>
            <td>{{ item.Email }}</td>
            <td>{{ item.Address }}</td>
            <td>
              <v-btn :to="'/phone/' + item.Id" icon color="primary">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
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
import ClientService from "../services/ClientService";

export default {
  name: "TblSchedule",
  data() {
    return {
      clients: []
    };
  },
  methods: {
    getAllClients() {
      ClientService.getAll().then(response => {
        this.clients = response.data;
      });
    }
  },
  created() {
    this.getAllClients();
  }
};
</script>
