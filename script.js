var time = new Date().getHours();

//conditional statements here

var greeting = "Hi";
var name = "sadiejay";

if (time < 12) {
  greeting = "Good morning";
} else if (time <= 18) {
  greeting = "Good afternoon";
} else {
  greeting = "Go to bed";
}
alert(`${greeting} ${name}!`);
