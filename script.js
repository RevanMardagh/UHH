// Buttons change menu
let button1 = document.querySelectorAll(".changemenu")[0];
let button2 = document.querySelectorAll(".changemenu")[1];
let button3 = document.querySelectorAll(".changemenu")[2];
let button4 = document.querySelectorAll(".changemenu")[3];
let button5 = document.querySelectorAll(".changemenu")[4];

function menuChange(btn) {
  btn.addEventListener("click", () => {
    // Change class
    document.getElementById("burger-toggle").checked = false;
  });
}

menuChange(button1);
menuChange(button2);
menuChange(button3);
menuChange(button4);
menuChange(button5);
