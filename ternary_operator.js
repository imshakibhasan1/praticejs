const result = document.getElementById("show")
let age = prompt()
// let start_rain = 1


if (age > 17){
    result.textContent = "you can drink unlimited"
} else if (age > 24) {
    result.textContent = "you can drink until yours stress are release"
} else if (age > 35){
        result.textContent = "you can drink 9 pag"
} else if (age > 47){
    result.textContent = "you can drink 3 pag"
} else if (age > 57){
    result.textContent = "you can drink 2 pag"
} else {
    result.textContent = "you can't drink get out"
}



// age >= 18 ? result.textContent = "you can drink" : result.textContent = "you can't drink get out"

// start_rain = true ? result.textContent = "pick the umbrala" + console.log("A") : result.textContent = "go without umbrala"


   