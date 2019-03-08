var slider = document.getElementById("slider");
var output = document.getElementById("text");
output.innerHTML = slider.value; // Display the default slider value
// console.log

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}


