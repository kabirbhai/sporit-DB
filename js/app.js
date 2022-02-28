const loadPlayers = () => {
    const searchBox = document.getElementById('search-box').value;
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchBox}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetiles(data.player))
    // console.log(searchBox)
}
const displayDetiles = (players) => {
    const parant = document.getElementById('player-container')
    for (const player of players) {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card" style="width: 18rem;">
        <img src="${player.strThumb}" class="card-img-top" alt="loading..">
            <div class="card-body">
                <h2>Name: ${player.strPlayer}</h2>
                <h5>Country: ${player.strNationality}</h5>
                <p></p>
                <div class="allbutton">
                    <button class="btn bg-primary">Delete</button>
                    <button onclick="details()" class="btn bg-secondary">Detailes</button>
                </div>
            </div>
        </div>
        `;
        parant.appendChild(div)
    }
}
const details = () => {
    console.log('first')
}