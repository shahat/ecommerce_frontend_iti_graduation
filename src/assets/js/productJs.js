var toggelButtons = document.getElementsByClassName("toggel");
var toggelPages = document.querySelectorAll("div[id*='tab-pane-']");

for (var i = 0; i < toggelButtons.length; i++) {
  toggelButtons[i].addEventListener("click", switchPages);
  // Add a custom data attribute to store the index
  toggelButtons[i].setAttribute("button-index", i);
}

function switchPages(e) {
  var button = e.target;
  // Get the index from the data attribute
  var index = button.getAttribute("button-index");

  for (var i = 0; i < toggelButtons.length; i++) {
    toggelButtons[i].classList.remove("border-bottom-0", "border");
    toggelButtons[i].classList.add("border-bottom");
    toggelPages[i].classList.add("d-none");
  }
  button.classList.add("border-bottom-0", "border");
  button.classList.remove("border-bottom");
  toggelPages[index].classList.remove("d-none");
}
