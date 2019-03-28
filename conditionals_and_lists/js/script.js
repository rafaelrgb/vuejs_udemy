new Vue({
  el: '#ifApp',
  data: {
    show: true
  }
});

new Vue({
  el: '#listApp',
  data: {
    ingredients: [ 'meat', 'fruit', 'cookies' ],
    persons: [
      { name: 'Max', age: 27, color: 'red' },
      { name: 'Anna', age: 'unknown', color: 'blue' }
    ]
  }
});

new Vue({
  el: '#exercise',
  data: {
    show: true,
    array: ['Max', 'Anna', 'Chris', 'Manu'],
    myObject: {
      title: 'Lord of the Rings',
      author: 'J.R.R. Tolkiens',
      books: '3'
    },
    testData: {
      name: 'TESTOBJECT',
      id: 10,
      data: [1.67, 1.33, 0.98, 2.21]
    }
  }
});