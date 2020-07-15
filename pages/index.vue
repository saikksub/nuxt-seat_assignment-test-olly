<template>
  <div>
    <div class="intro mx-auto mt-16">
      <h1 class="text-center">
        Welcome to Booky
      </h1>
      <p class="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        distinctio repellendus eveniet? Illum cum dicta ex nemo voluptatibus
        molestiae nisi corporis, amet a ipsa tempore perferendis rerum deserunt
        necessitatibus labore?
      </p>
      <div class="text-center">
        <v-btn x-large color="primary" to="/new_contact" nuxt
          >Create Contact</v-btn
        >
      </div>
    </div>
    <section>
      <h2 class="my-4">
        Booked Customers
      </h2>
      <v-data-table
        :headers="headers"
        :items="data"
        item-key="name"
        sort-by="name"
        group-by="category"
        class="elevation-1"
        show-group-by
      ></v-data-table>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      headers: [
        {
          text: "Name",
          align: "start",
          value: "user.name",
          groupable: false
        },
        {
          text: "Email",
          value: "user.email",
          align: "right",
          groupable: false
        },
        { text: "Row", value: "row", align: "right" },
        { text: "Column", value: "col", align: "right" },
        {
          text: "Seat Number",
          value: "seat_number",
          align: "right",
          groupable: false
        }
      ],
      data: []
    };
  },
  computed: {
    ...mapGetters(["seats"])
  },
  mounted() {
    this.data = this.seats.flat().filter(seat => seat.filled);
  }
};
</script>

<style lang="scss">
.intro {
  @media screen and (min-width: 768px) {
    width: 60%;
  }
}
</style>
