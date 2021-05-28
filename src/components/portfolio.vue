<template>
  <div class="container" style="text-align: center">
    <h1>My Portfolio</h1>
    <img src="@/assets/Ning2.jpg" height="600" />
    <p>My Profile</p>
    <button @click="Profile()">
      <img src="@/assets/profile.png" height="45" width="45" />
    </button>

    <p>My Contact</p>
    <button @click="Contact()">
      <img src="@/assets/contacts.png" height="45" width="45" />
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    Contact() {
      this.$router.push("/contact");
    },
    Profile() {
      this.$router.push("/profile");
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
p {
  font-size: 1.2em;
  margin: 20px 0px 20px 0px;
}
</style>