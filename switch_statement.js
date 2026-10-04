const result = document.getElementById("show")

function getPrice(item) {
    let price = 0
    switch (item){
        case "Banana": 
        price = 3 
        break
        case "orange":
        price = 5
        break
        case "apple":
        price = 4.5
    }
    return `You Selected ${item}, Price will be $${price}`
}

result.textContent = getPrice ("apple");