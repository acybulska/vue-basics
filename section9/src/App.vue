<template>
  <div id="app">
    <app-quote :quote="'A wonderful quote!'">
      <h1 slot="title">{{quoteTitle}}</h1>
      <p slot="content">A wonderful quote</p>
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
