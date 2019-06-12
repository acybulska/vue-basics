<template>
  <div id="app">
    <app-quote :quote="'A wonderful quote!'">
      <h1>{{quoteTitle}}</h1>
      <p>A wonderful quote</p>
    </app-quote>
  </div>
</template>

<script>
import Quote from './components/Quote.vue'
export default {
  name: 'app',
  data() {
    return {
      quoteTitle: 'Quote'
    }
  },
  components: {
    'appQuote': Quote
  }
}
</script>

<style>

</style>
