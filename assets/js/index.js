// SIDEPANEL JS FOR TOGGLE
/* Set the width of the sidebar to 250px (show it) */
function openNav() {
  document.getElementById("myleftSidepanel").style.width = "280px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("myleftSidepanel").style.width = "0";
  document.getElementById("myleftSidepanel").style.transition = "width 0.1s";
}
document
  .getElementById("myleftSidepanel")
  .addEventListener("onclick", function () {
    this.style.width = "250px";
  });

document
  .getElementById("myleftSidepanel")
  .addEventListener("mouseleave", function () {
    this.style.width = "0";
  });

// SIDEPANEL JS FOR HOVER SETTINGS BUTTON
function openSet() {
  document.getElementById("myrightSidepanel").style.width = "230px";
  document.getElementById("myrightSidepanel").style.transition = "width 0.1s";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeSet() {
  document.getElementById("myrightSidepanel").style.width = "0";
  document.getElementById("myrightSidepanel").style.transition = "width 0.1s";
}

/* Add hover effect to the sidebar */
document
  .getElementById("myrightSidepanel")
  .addEventListener("mouseenter", function () {
    this.style.width = "250px";
  });

document
  .getElementById("myrightSidepanel")
  .addEventListener("mouseleave", function () {
    this.style.width = "0";
  });
