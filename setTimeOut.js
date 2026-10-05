const result = document.getElementById("show")

// function trafficLight(light){
//     console.log(light)
// }

// setTimeout(trafficLight, 5000, '🔴')
// trafficLight('🟢')

// function showNotification(message) {
//     console.log(message);

//     setTimeout(() => {
//         console.log("Notification disappeared");
//     }, 5000);
// }

// showNotification("New message received!");

result.textContent = "what is the capital of Peru?"
function logAns(ans,Points){
    result.textContent = `The Answer is ${ans} of course! If you got the right, give yourself ${Points} Points `
}

setTimeout(logAns, 5000, "lima", 10)
