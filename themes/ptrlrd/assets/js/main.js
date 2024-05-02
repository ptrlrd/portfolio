console.log('Oh, you\'re a sneaky one! ');


document.addEventListener("DOMContentLoaded", function() {
    let date = new Date();
    let hour = date.getHours();
    let greetingText = "Have a great ";

    if (hour >= 6 && hour < 18) { // From 6:00 AM to 5:59 PM
    greetingText += "day";
} else { // From 6:00 PM to 5:59 AM
    greetingText += "night";
}

    greetingText += " -- thanks for visiting.";

    document.getElementById('timeBasedGreeting').textContent = greetingText;
});
