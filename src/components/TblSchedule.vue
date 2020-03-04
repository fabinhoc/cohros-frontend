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
        <tbody></tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
export default {
  name: "TblSchedule",

  data() {}
};
</script>
