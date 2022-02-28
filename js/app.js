const loadPlayers = () => {
    const searchBox = document.getElementById('search-box').value;
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchBox}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetiles(data.player))
    // console.log(searchBox)
}
const displayDetiles = (players) => {
    for (const player of players) {
        console.log(player)
    }
}