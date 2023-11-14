var toggleButtons = document.getElementsByClassName("toggle");
var togglePages = document.querySelectorAll("div[id*='tab-pane-']");

for (var i = 0; i < toggleButtons.length; i++) {
  toggleButtons[i].addEventListener("click", switchPages);
  // Add a custom data attribute to store the index
  toggleButtons[i].setAttribute("button-index", i);
}

function switchPages(e) {
  var button = e.target;
  // Get the index from the data attribute
  var index = button.getAttribute("button-index");

  for (var i = 0; i < toggleButtons.length; i++) {
    toggleButtons[i].classList.remove("border-bottom-0", "border");
    toggleButtons[i].classList.add("border-bottom");
    togglePages[i].classList.add("d-none");
  }
  button.classList.add("border-bottom-0", "border");
  button.classList.remove("border-bottom");
  togglePages[index].classList.remove("d-none");
}
