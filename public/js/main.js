(() => {
  // <stdin>
  console.log("Oh, you're a sneaky one! ");
  document.addEventListener("DOMContentLoaded", function() {
    let date = /* @__PURE__ */ new Date();
    let hour = date.getHours();
    let greetingText = "Have a great ";
    if (hour >= 6 && hour < 18) {
      greetingText += "day";
    } else {
      greetingText += "night";
    }
    greetingText += " -- thanks for visiting.";
    document.getElementById("timeBasedGreeting").textContent = greetingText;
  });
})();
