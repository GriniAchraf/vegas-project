var popup1 = document.getElementById("popup1");
var popups = [
  { id: "popup1", ref: document.getElementById("popup1") },
  { id: "popup-cluster-1", ref: document.getElementById("popup-cluster-1") },
  { id: "popup-cluster-2", ref: document.getElementById("popup-cluster-2") },
  {
    id: "popup-cluster-1-t2",
    ref: document.getElementById("popup-cluster-1-t2"),
  },
  {
    id: "popup-cluster-2-t2",
    ref: document.getElementById("popup-cluster-2-t2"),
  },
  { id: "popup2", ref: document.getElementById("popup2") },
];
function openPopup(pos) {
  popups[pos].ref.style.visibility = "visible";
  popups[pos].ref.style.opacity = 1;
}

function closePopup(pos) {
  popups[pos].ref.style.visibility = "hidden";
  popups[pos].ref.style.opacity = 0;
}
