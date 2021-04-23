<template>
  <div>
    <div
      class="flex p-5 max-w-sm mx-auto bg-white shadow-md items-center space-x-4 border border-gray-300 rounded"
    >
      <div class="flex w-5 h-5 image-wrapper">
        <img
          class="h-50 w-50"
          src="/images/change-icon.png"
          alt="change-icon"
        />
      </div>
      <div>
        <h4 class="text-xl font-medium text-black">{{ cards[1].title }}</h4>
        <p>Silvergate Bank (SWIFT)</p>
        <span class="text-xs text-blue-600">+ 30 USD Fee</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["cards"]
};
</script>
