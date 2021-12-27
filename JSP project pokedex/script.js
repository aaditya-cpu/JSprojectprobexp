const typeColor = {
    bug: "#26de81",
    dragon: "#ffeaa7",
    electric: "#fed330",
    fairy: "#FF0069",
    fighting: "#30336b",
    fire: "#f0932b",
    flying: "#81ecec",
    grass: "#00b894",
    ground: "#EFB549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "#6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    water: "#0190FF",
};
const url = "https://pokeapi.co/api/v2/pokemon/";
const card = document.getElementById("card");
const btn = document.getElementById("btn");
//Generate and combine to form a url to fetch data
let getPokeData = () => {
    let id = Math.floor(Math.random() * 500) + 1;
    console.log(id);
    const finalURl = url + id;
    console.log(finalURl);
    //fetch data
    fetch(finalURl)
        .then((response) => response.json())
        .then((data) => {
            generateCard(data)
                // console.log(data)
        });

};
//Generate card
let generateCard = (data) => {
    //get the data to show
    console.log(data);
    const hp = data.stats[0].base_stat;
    // console.log(hp);
    const imgSrc = data.sprites.other.dream_world.front_default;
    const pokename = data.name.toUpperCase();
    const statattack = data.stats[1].base_stat;
    const statdef = data.stats[2].base_stat;
    const speed = data.stats[5].base_stat;
    //set colour to type
    const themeColor = typeColor[data.types[0].type.name];
    console.log(themeColor);


    card.innerHTML = `
    <div id="card">
            <p class="hp"><span>HP</span> ${hp} </p>
            <img src=${imgSrc} alt="${pokename}">
            <h2 class="poke-name">${pokename}</h2>
            <div class="types">
                
            </div>
            <div class="stats">
                <div>
                    <h3>${statattack}</h3>
                    <p>Attack</p>
                </div>
                <div>
                    <h3>${statdef}</h3>
                    <p>Defense </p>
                </div>
                <div>
                    <h3>${speed}</h3>
                    <p>Speed</p>
                </div>

            </div>

        </div>
    
    `;
    appendtypes(data.types);
    styleCard(themeColor);

};
let appendtypes = (types) => {
    console.log(types);
    types.forEach((item) => {
        let span = document.createElement("SPAN")
        span.textContent = item.type.name;
        // console.log(span);
        document.querySelector(".types").appendChild(span);
    });

};
let styleCard = (color) => {
    card.style.background = `radial-gradient(circle at 50% 0%, ${color} 36%, #ffffff 36%)`;
    card.querySelectorAll(".types span").forEach(
        (typeColor) => {
            typeColor.style.backgroundColor = color;
        });
};

btn.addEventListener("click", getPokeData);
window.addEventListener("load", getPokeData);