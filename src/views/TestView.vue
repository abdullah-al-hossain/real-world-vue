<template>
  <div class="test">
    <h1 class="text-center">This is the new div I was talking about.</h1>
    <AbouttView v-for="(item, index) in items" :key="index" :item="item" />
  </div>
</template>

<script>
import AbouttView from '@/views/AbouttView.vue'

export default {
  name: 'TestView',

  components: {
    AbouttView,
  },

  data() {
    return {
      items: [
        {
          name: 'Title 1',
          description:
            'This is the description for the test card. Thanks for being with us.',
        },
        {
          name: 'Title 2',
          description:
            'This is the description for the test card. Thanks for being with us.',
        },
        {
          name: 'Title 3',
          description:
            'This is the description for the test card. Thanks for being with us.',
        },
      ],
    }
  },
}
</script>

<style scoped>
.text-center {
  text-align: center;
}

.test {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
