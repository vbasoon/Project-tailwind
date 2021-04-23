<template>
  <div class="card card1">
    <div class=" card-icon icon-wrapper">
      <img class="icon-wrapper__img" src="/images/change-icon.png" alt="" />
    </div>
    <div class="card__card-desc">
      <h2>{{ title }}</h2>
      <p>Silvergate Bank (SWIFT)</p>
      <span>+ 30 USD Fee</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card-project",
  props: ["title"]
};
</script>

<style lang="scss">
.card {
  display: flex;
  position: relative;
  border-radius: 5px;
  margin: 20px 0px;

  .card-desc {
    display: flex;
    flex-direction: column;
    justify-content: center;

    span {
      font-size: 13px;
      color: rgba(0, 87, 255, 1);
      padding-top: 5px;
    }
  }
}
</style>
