<template>
  <v-container>
    <v-row>
      <v-btn
        @click="dialogForm = true"
        class="ma-2 ma-auto mb-5"
        color="success"
        dark
      >
        <v-icon dark>mdi-plus</v-icon> Add new
      </v-btn>
    </v-row>
    <v-simple-table width="100%">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-center">Phone</th>
            <th class="text-center">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-center" v-for="item in phones" :key="item.phone">
            <td>{{ item.PhoneNumber }}</td>
            <td>
              <v-btn icon color="red" @click="deletePhone(item.id)">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
              <v-btn @click="getPhone(item)" icon color="success">
                <v-icon>mdi-pencil</v-icon>
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

    <v-dialog v-model="dialogForm" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Phone number</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <input type="hidden" v-model="phoneId" />
                <v-text-field
                  v-model="PhoneNumber"
                  label="Phone number"
                  placeholder=" "
                  required
                  outlined
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialogForm = false"
              >Cancel</v-btn
            >
            <v-btn color="blue darken-1" text @click="savePhone">Save</v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import PhoneService from "../services/PhoneService";

export default {
  name: "TblSchedule",
  props: ["client_id"],
  data() {
    return {
      dialog: false,
      phones: [],
      dialogForm: false,
      PhoneNumber: "",
      phoneId: "",
      phoneNumberRules: [v => !!v || "Name is required"]
    };
  },
  methods: {
    findAllByClientId() {
      PhoneService.findByClientId(this.client_id).then(response => {
        if (response.data) this.phones = response.data;
      });
    },
    deletePhone(id) {
      PhoneService.delete(id).then(response => {
        console.log(response.data);
        if (response.status == 200) {
          this.dialog = true;
          this.findAllByClientId();
        }
      });
    },
    save() {
      if (this.PhoneNumber != "") {
        let data = {
          Client_id: this.$route.params.client_id,
          PhoneNumber: this.PhoneNumber
        };
        PhoneService.save(data).then(response => {
          if (response.status == 200) {
            this.findAllByClientId();
            this.PhoneNumber = "";
            this.phoneId = "";
          }
          this.dialogForm = false;
        });
      }
    },
    edit(id) {
      let data = {
        Client_id: this.$route.params.client_id,
        PhoneNumber: this.PhoneNumber
      };
      PhoneService.edit(data, id).then(response => {
        if (response.status == 200) {
          this.findAllByClientId();
          this.PhoneNumber = "";
          this.phoneId = "";
        }
        this.dialogForm = false;
      });
    },
    savePhone() {
      if (this.phoneId != "") this.edit(this.phoneId);
      else this.save();
    },
    getPhone(phone) {
      this.PhoneNumber = phone.PhoneNumber;
      this.phoneId = phone.id;
      this.dialogForm = true;
    }
  },
  created() {
    this.findAllByClientId();
  },
  watch: {
    dialog(val) {
      if (!val) return;

      setTimeout(() => (this.dialog = false), 1000);
    }
  }
};
</script>
