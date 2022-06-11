<template>
  <div class="item-card">
    <h1>{{ item.name }}</h1>
    <p>{{ item.description }}</p>
  </div>
</template>

<script>
export default {
  name: 'AbouttView',
  props: {
    item: Object,
  },
}
</script>

<style scoped>
.item-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.item-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
