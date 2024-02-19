// console.log("review.js connected");

let serial = 1;

document.getElementById("review-btn").addEventListener("click", function () {
  const inputElement = document.querySelector("#review-textarea");
  const input = inputElement.value;

  const container = document.getElementById("review");

  const div = document.createElement("div");
  div.innerHTML = serial + ". " + input;
  serial++;

  container.appendChild(div);

  //clear textarea
  document.querySelector("#review-textarea").value = "";
});
