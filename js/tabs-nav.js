let tab_1 = document.getElementById("tab_1");
let tab_2 = document.getElementById("tab_2");
let content_1 = document.getElementById("content_tab_1");
let content_2 = document.getElementById("content_tab_2");
content_2.style.display = "none";

function select_tab_2() {
  tab_2.classList.add("active");
  tab_1.classList.remove("active");
  content_1.style.display = "none";
  content_2.style.display = "block";
}
function select_tab_1() {
  tab_1.classList.add("active");
  tab_2.classList.remove("active");
  content_1.style.display = "block";
  content_2.style.display = "none";
}
