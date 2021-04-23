<template>
  <div class="container">
    <div class="heading">
      <h1 class="title">Elements</h1>
    </div>
    <div class="cards">
      <CardTw :cards="cards" />
      <CardStyle title="Card Style" />
    </div>
  </div>
</template>

<script>
import CardProject from "../components/Card_prj/Card";
import CardTw from "../components/Card_tailwind/Card";
import CardStyle from "../components/Сard_style/Card";
export default {
  name: "pages",
  data() {
    return {
      cards: [{ title: "Card1" }, { title: "Card tailwind" }]
    };
  },
  components: {
    CardProject,
    CardTw,
    CardStyle
  }
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 20px;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
  text-align: center;
}

.heading {
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
}
.cards {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
</style>
