document.getElementById("caller").addEventListener("click", movies);

async function movies(e) {
    if (e) e.preventDefault();
    const search = document.querySelector(".movies");
    search.innerHTML = "";

    const query = document.getElementById("s").value.trim();
    if (!query) return alert("Please enter a movie title.");

    let m = document.getElementById("s").value.trim();
    const url = `http://www.omdbapi.com/?s=${m}&apikey=68e3c51d`;
    const response = await fetch(url);
    const data = await response.json();
    data.Search.slice(0, 10).forEach( (movie) => {
        const ele = document.createElement("div");
        ele.classList.add("card");

        const image = document.createElement("img");
        image.src = movie.Poster !== "N/A"? movie.Poster: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png";

        image.alt = movie.Title;

        const title = document.createElement("p");
        title.textContent = `Title: ${movie.Title}`;

        const type = document.createElement("p");
        type.textContent = `Type: ${movie.Type}`;

        const year = document.createElement("p");
        year.textContent = `Year: ${movie.Year}`;

        const button = document.createElement("button");
        button.type = "button";
        button.innerHTML = `<i class="fa-regular fa-heart"></i>`;

        ele.append(image, title, type, year, button);
        search.appendChild(ele);
    });
}