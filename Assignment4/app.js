new Vue({
  el: '#exercise',
  data: {
    alternateClass: 'highlight',
    addClass: '',
    attachClass: true,
    color: 'blue',
    width: 0
  },
  methods: {
    startEffect: function () {
      var vm = this;
      setInterval(function () {
        vm.alternateClass == 'highlight' ? vm.alternateClass = 'shrink' : vm.alternateClass = 'highlight';
      }, 2000);
    },
    startProgress: function () {
      var vm = this;
      setInterval(function () {
        vm.width = vm.width + 10;
      }, 1000);
    }
  }
});
