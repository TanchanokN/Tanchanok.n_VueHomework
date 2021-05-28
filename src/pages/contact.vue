<template>
  <div class="container" style="text-align: center">
    <h1>My Contact</h1>
    <img src="@/assets/767.jpg" height="400" />
    <p>Phone No. : {{ phone }}</p>
    <p>Email : {{ email }}</p>
    <p>Facebook : {{ facebook }}</p>
    <p>Line ID: {{ line }}</p>

    <p>Home</p>
    <button @click="Home()">
      <img src="@/assets/home.png" height="45" width="45" />
    </button>

    <p>My Profile</p>
    <button @click="Profile()">
      <img src="@/assets/profile.png" height="45" width="45" />
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phone: "0819126691",
      line: "ningnong321",
      email: "ng.tanchanok_st@tni.ac.th",
      facebook: "Ning Nong",
    };
  },
  methods: {
    Profile() {
      this.$router.push("/profile");
    },
    Home() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
p {
  font-size: 1.2em;
  margin: 25px 0px 10px 0px;
}
</style>