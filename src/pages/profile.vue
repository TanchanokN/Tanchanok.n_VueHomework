<template>
  <div class="container" style="text-align: center">
    <h1>My Profile</h1>

    <img src="@/assets/Ning.jpg" height="400" />

    <p>Name : {{ name }}</p>
    <p>Nickname : {{ nickname }}</p>
    <p>Age : {{ age }}</p>
    <p>weight: {{ weight }}</p>
    <p>height: {{ height }}</p>
    <p>Skill: {{ skill }}</p>
    <p>Hobby: {{ hobby }}</p>

    <p>Home</p>
    <button @click="Home()">
      <img src="@/assets/home.png" height="45" width="45" />
    </button>
    <p>My Contact</p>
    <button @click="Contact()">
      <img src="@/assets/contacts.png" height="45" width="45" />
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Tanchanok   Ngamjaturong",
      nickname: "Ning",
      age: 21,
      skill: "C#,Python,JavaScript,R,Power BI,PHP,PL/SQL,AI",
      weight: 40.6,
      height: 161,
      hobby: "Made MMD Video",
    };
  },
  methods: {
    Contact() {
      this.$router.push("/contact");
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
