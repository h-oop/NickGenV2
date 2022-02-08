//
let firstName = document.getElementById("first-enter");
let lastName = document.getElementById("last-enter");
let output = document.getElementById("result");

document.getElementById("random-btn").addEventListener("click", doRandomName);
document.getElementById("all-btn").addEventListener("click", doAllNames);

let nickArray = ["Eeby Deeby", "Mute Lunatic", "Cool Nickname Here", "Congo Wire", "Danimal", "Disco Potato", "Drugstore Cowboy"]

function doRandomName() {
  let nickChoice = Math.floor(Math.random() * nickArray.length);
  output.innerHTML = firstName.value + " \"" + nickArray[nickChoice] + "\" " + lastName.value;
}

function doAllNames() {
  console.log(nickArray);
  for (let i = 0; i < nickArray.length; i++) {
    output.innerHTML += firstName.value + " \"" + nickArray[i] + "\" " + lastName.value + "<br>";
    console.log(firstName.value + " \"" + nickArray[i] + "\" " + lastName.value);
  }
}
