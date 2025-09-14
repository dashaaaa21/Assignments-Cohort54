"use strict";

document.getElementById("nickname").textContent = "Daria"
document.getElementById("fav-food").textContent = "Sushi"
document.getElementById("hometown").textContent = "Rivne"

const liElement = document.querySelectorAll(" ul li");
liElement.forEach((li) => {
  li.classList.add("list-item");
})
