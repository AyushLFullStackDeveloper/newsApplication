function exploreMore() {
  window.location.href = "#top-stories";
}

function showLiveUpdates() {
  alert("Live updates feature coming soon!");
}

function openMap() {
  alert("Interactive news map feature coming soon!");
}

function customizeDashboard() {
  alert("Customizable dashboard feature coming soon!");
}
//
document.getElementById("toggle-button").addEventListener("click", function () {
  var navbar = document.getElementById("navbar").querySelector("ul");
  navbar.classList.toggle("show");
});
