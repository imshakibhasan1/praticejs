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
        break
      default :
        return `we don't sell that ${item}`
    }
    return `You Selected ${item}, Price will be $${price}`
}

result.textContent = getPrice ("bluebery");




let day = 6;

switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Weekday");
        break;

    case 6:
    case 7:
        console.log("Weekend");
        break;

    default:
        console.log("Invalid day");
}





let score = 80;

switch (true) {
    case score >= 90:
        console.log("Grade A");
        break;
    case score >= 80:
        console.log("Grade B");
        break;
}