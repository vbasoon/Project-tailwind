<template>
  <div class="card card1">
    <div class=" card-icon icon-wrapper">
      <img class="icon-wrapper__img" src="/images/change-icon.png" alt="" />
    </div>
    <div class="card-desc">
      <h1>{{ title }}</h1>
      <p>Silvergate Bank (SWIFT)</p>
      <span>+ 30 USD Fee</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card-style",
  props: ["title"]
};
</script>

<style lang="scss">
.card {
  display: flex;
  max-width: 439px;
  padding: 15px 20px;
  position: relative;
  align-items: center;
  border-radius: 5px;
  border: 0.5px solid #c5c5c5;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.card-icon {
  margin-right: 10px;
}

.card-desc {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 20px;
    font-weight: 500;
  }

  span {
    font-size: 10px;
    color: rgba(0, 87, 255, 1);
    padding-top: 5px;
  }
}
</style>
