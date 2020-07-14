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
        <v-btn x-large color="primary">Create New Contact</v-btn>
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
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  data() {
    return {
      headers: [
        {
          text: "Name",
          align: "start",
          value: "name",
          groupable: false
        },
        { text: "Email", value: "email", align: "right", groupable: false },
        { text: "Seat Number", value: "number", align: "right" }
      ],
      data: [
        {
          name: "Emmanuel Olly",
          email: "developer.olly@gmail.com",
          number: "1, 1"
        },
        {
          name: "Emmanuel",
          email: "developer.olly@gmail.com",
          number: "1, 2"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.intro {
  width: 60%;
}
</style>
