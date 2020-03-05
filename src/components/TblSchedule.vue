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
              <v-btn :to="'/client/' + item.Id" icon color="success">
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-btn icon color="red">
                <v-icon @click="deleteClient(item.Id)">mdi-delete</v-icon>
              </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-dialog v-model="dialog" hide-overlay persistent width="300">
      <v-card color="primary" dark>
        <v-card-text>
          Please wait
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import ClientService from "../services/ClientService";

export default {
  name: "TblSchedule",
  data() {
    return {
      clients: [],
      dialog: false
    };
  },
  methods: {
    getAllClients() {
      ClientService.getAll().then(response => {
        this.clients = response.data;
      });
    },
    deleteClient(id) {
      ClientService.delete(id).then(response => {
        if (response.status == 200) {
          this.dialog = true;
          this.getAllClients();
        }
      });
    }
  },
  created() {
    this.getAllClients();
  },
  watch: {
    dialog(val) {
      if (!val) return;

      setTimeout(() => (this.dialog = false), 1000);
    }
  }
};
</script>
