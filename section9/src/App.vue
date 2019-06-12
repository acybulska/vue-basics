<template>
  <div id="app">
    <button @click="selectedComponent='appQuote'">Quote</button>
    <button @click="selectedComponent='appAuthor'">Author</button>
    <button @click="selectedComponent='appNew'">New</button>
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
    <!--<app-quote :quote="'A wonderful quote!'">
      <h1 slot="title">{{quoteTitle}}</h1>
      <p slot="content">A wonderful quote</p>
    </app-quote>-->
  </div>
</template>

<script>
import Quote from './components/Quote.vue'
import Author from './components/Author.vue'
import New from './components/New.vue'

export default {
  name: 'app',
  data() {
    return {
      quoteTitle: 'Quote',
      selectedComponent: 'appQuote'
    }
  },
  components: {
    'appQuote': Quote,
    'appAuthor': Author,
    'appNew': New
  }
}
</script>

<style>

</style>
