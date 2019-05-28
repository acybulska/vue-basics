new Vue({
    el: '#exercise',
    data: {
        value: ''
    },
    methods: {
        getAlert: function() {
            alert('Alert');
        },
        getValue: function (event) {
            this.value = event.target.value;
        }
    }
});