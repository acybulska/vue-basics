<template>
  <div id="app">
    <app-quote :quote="'A wonderful quote!'"/>
  </div>
</template>

<script>
import Quote from './components/Quote.vue'
export default {
  name: 'app',
  components: {
    'appQuote': Quote
  }
}
</script>

<style>

</style>
