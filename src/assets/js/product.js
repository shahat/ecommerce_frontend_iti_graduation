var filterOpenButton = document.getElementById("filter-but");
var filterDiv = document.getElementById("filter-div");
var filterCloseButton = document.getElementById("close-but");
var xCloseButton = document.getElementById("x-but");
filterDiv.style.display = `none`;
filterOpenButton.addEventListener("click", function () {
  filterDiv.style.display = `block`;
});
filterCloseButton.addEventListener(`click`, function () {
  filterDiv.style.display = `none`;
});
xCloseButton.addEventListener(`click`, function () {
  filterDiv.style.display = `none`;
});
