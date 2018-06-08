<template>
  <v-container fluid>

    <ul v-for="ticket in tickets">
      <li>Senha - {{ ticket.ticket }}</li>
    </ul>
  </v-container>
</template>
<script>
import firebase from 'firebase';
export default {
  data() {
    return {
      tickets: this.$store.getters.getTickets,
    }
  },
  methods: {
  },
  mounted() {
    this.$store.dispatch('setTickets');
  },
  computed: {

  }
};
</script>

<style>

</style>
