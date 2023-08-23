let peraOne = document.querySelector("#allinOne");
let name = document.querySelector("#name");
let inputOne = document.querySelector("#Email");
let inputTwo = document.querySelector("#Pass");
let backG = document.querySelector("#Form");

// For Name
name.addEventListener("focus", function () {
  peraOne.style.display = "block";
  peraOne.innerHTML = "Enter Full name";
  backG.style.backgroundColor = "rgb(245, 108, 131)";
});

name.addEventListener("focusout", function (e) {
  peraOne.style.display = "none";
  backG.style.backgroundColor = "aqua";
  name.value = e.target.value.toUpperCase();
  console.log("Name: " + e.target.value);
});
// For Gmail
inputOne.addEventListener("focus", function () {
  peraOne.style.display = "block";
  peraOne.innerHTML = "Enter Gmail";
  backG.style.backgroundColor = "rgb(202, 108, 245)";
});

inputOne.addEventListener("focusout", function (e) {
  peraOne.style.display = "none";
  backG.style.backgroundColor = "aqua";
  console.log("Email: " + e.target.value);
});

// For Password
inputTwo.addEventListener("focus", function () {
  peraOne.style.display = "block";
  peraOne.innerHTML = "Enter Password";
  backG.style.backgroundColor = "pink";
});

inputTwo.addEventListener("focusout", function (e) {
  peraOne.style.display = "none";
  backG.style.backgroundColor = "aqua";
  console.log("Password: " + e.target.value);
});

// For Drug

let DragBox = document.querySelector("#DropBox");
let DragText = document.querySelector("#DrugText");

// 1st Step: Who dropped (DrugText "id" transfer to DrugBox)

function dragStart(event) {
  event.dataTransfer.setData("Text", event.target.id);
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("Text");
  event.target.appendChild(document.getElementById(data));
}
