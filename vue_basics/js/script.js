new Vue({
  el: "#stylingApp",
  data: {
    attachRed: false,
    divClass: "green",
    divColor: "grey",
    width: 100
  },
  computed: {
    myStyle: function() {
      return { 
        backgroundColor: this.divColor,
        width: this.width + "px"
      } 
    }
  }
})

new Vue({
    el: "#eventsApp2",
    data: {
        counter: 0,
        secondCounter: 0,
    },
    computed: {
        output: function() {
            console.log('Computed');
            return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
        }
    },
    watch: {
        counter: function(value) {
            var vm = this;
            setTimeout(function() {
                vm.counter = 0;
            }, 2000);
        }
    },
    methods: {
        result: function() {
            console.log('Method');
            return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
        }
    }
})

new Vue({
    el: "#eventsApp",
    data: {
        counter: 0,
        x: 0,
        y: 0
    },
    methods: {
        increase: function(step, event) {
            this.counter += step;
        },
        updateCoordinates: function(event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },
        alertMe: function() {
            alert('Alert!');
        }
    }
})

new Vue({
    el: '#app',
    data: {
        title: 'Hello World!',
        link: 'http://google.com',
        finishedLink: '<a href="http://google.com">Google</a>'
    },
    methods: {
        sayHello: function() {
            this.title = 'Hello!';
            return this.title;
        }
    }
});

new Vue({
  el: '#exercise4',
  data: {
    effectOn: false,
    highlight: false,
    higher: "higher",
    further: { further: true },
    firstClass: "",
    secondClass: "",
    thirdClassTrueOrFalse: false,
    myMargin: 0,
    progressBarWidth: 0
  },
  computed: {
    effectClass: function() {
      return {
        highlight: this.effectOn && this.highlight,
        shrink: this.effectOn && !this.highlight
      }
    },
    faster: function() {
      return {
        faster: this.highlight
      }
    },
    thirdClass: function() {
      return {
        further: this.thirdClassTrueOrFalse
      }
    },
    divClasses: function() {
      return [
        this.secondClass,
        this.thirdClass
      ]
    }
  },
  methods: {
    startEffect: function() {
      this.effectOn = true;
      var mv = this;
      setInterval(function() {
        mv.highlight = !mv.highlight;
      }, 1000);
    },
    startProgress: function() {
      var mv = this;
      setInterval(function() {        
        if (mv.progressBarWidth < 100) {
          mv.progressBarWidth += 1;
        }
      }, 500);
    }
  }
});

new Vue({
    el: '#exercise3',
    data: {
        value: 0
    },
    computed: {
        result: function() {
            return this.value < 37 ? 'not there yet' : 'done';
        }
    },
    watch: {
        result: function(value) {
            var vm = this;
            setTimeout(function() {
                vm.value = 0;
            }, 5000);
        }
    }
});

new Vue({
    el: '#exercise2',
    data: {
        value: ''
    },
    methods: {
        showAlert: function() {
            alert('This is an alert!');
        },
        updateValue: function(event) {
            this.value = event.target.value;
        }
    }
});

new Vue({
    el: '#exercise1',
    data: {
        name: 'Rafael',
        age: 28,
        imgLink: 'https://cdn.shopify.com/s/files/1/1158/2192/products/One-punch-man-saitama-ok-decal-black_1024x1024.jpg?v=1455425385'
    },
    methods: {
        randomFloat() {
            return Math.floor(Math.random() * 100) + 1;
        }
    }
})