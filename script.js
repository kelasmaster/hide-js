// Original JavaScript code
document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  alert("Right-click is disabled!");
});

document.getElementById("demoButton").addEventListener("click", () => {
  alert("You clicked the button!");
});
