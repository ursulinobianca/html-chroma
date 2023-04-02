var slider = document.getElementById("myRange").oninput = function() {
  var value = (this.value-this.min)/(this.max-this.min)*100 

  this.style.background = 'linear-gradient(to right, #74103D 0%' + value + '%, #fff ' + value + '%,#fff 100%)'

}

var slider = document.getElementById("barrasound").oninput = function slidsound() {
  var value = (this.value-this.min)/(this.max-this.min)*100 

  this.style.background = 'linear-gradient(to right, #BF085A 0%,' + value + '%, #fff ' + value + '%,#fff 100%)'

}
