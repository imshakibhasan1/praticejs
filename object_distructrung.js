const result = document.getElementById("show")

const favouriteFilm = {
    title: "Top Gun",
    year: "1986",
    genre: "action",
    star: "Tom Cruise",
    director: "Tony Scott"
};

let Title = favouriteFilm.title
let Year = favouriteFilm.year
let Genre = favouriteFilm.genre
let Star = favouriteFilm.star

let {title, year, genre, star, director} = favouriteFilm

console.log(title);

let text = `My Favourite Movie is ${title} starring by ${star}. It is a action Flim directed by ${director} and release ${year} `

result.textContent = text