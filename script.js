let allElems = document.querySelectorAll(".elems");
let fullElemsPage = document.querySelectorAll(".fullElems");
let fullElemsPageback = document.querySelectorAll(".fullElems .close");
allElems.forEach((elem) => {
  elem.addEventListener("click", function () {
    fullElemsPage[elem.id].style.display = "block";
  });
});
fullElemsPageback.forEach(function (back) {
  back.addEventListener("click", function () {
    fullElemsPage[back.id].style.display = "none";
  });
});
