let app = new Vue({
  el: "#app",
  data: {
    name: "Vidyadhar",
    job: "Software developer",
    website: "http://google.com",
    websiteTag: '<a href="http://apple.com">MySite</a>',
    age: 29,
    x: 1,
    y: 2
  },
  methods: {
    greet: function(time) {
      return `Good ${time}, ${this.name}!!!`;
    },
    changeName: function() {
      this.name = "Ritesh";
    },
    addYear: function(year) {
      this.age += year;
    },
    subtractYear: function(year) {
      this.age -= year;
    },
    updateXY: function(event) {
      console.log(event);
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    gotoNokia: function() {
      alert("Goint to nokia");
    }
  }
});
