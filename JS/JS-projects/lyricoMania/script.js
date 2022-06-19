const result = document.getElementById("result");
const searchInput = document.getElementById("search");
const submit = document.getElementById("search-btn");

submit.addEventListener('click', (event) => {
    // validate
    event.preventDefault();
    if(searchInput.value.trim() === ""){
        alert("input field is empty")
    }
    else{
        searchSongs();
    }
});


const showData = (data) => {
    result.innerHTML = `
      <ul class="songs">
        ${data.data
          .map(
            song => `<li>
        <span><strong>${song.artist.name}</strong> - ${song.title}</span>
        <button class="btn" data-artist="${song.artist.name}" data-songtitle="${song.title}">Get Lyrics</button>
      </li>`
          )
          .join('')}
      </ul>
    `;
}

const searchSongs = async ()=> {
    try {
        const response = await fetch(`https://api.lyrics.ovh/suggest/${searchInput.value}`);
        const links= await response.json();
        showData(links);
    } catch (error) {
        console.log("Failed to get result", error); 
    }
}           


const getLyrics = async (artist, songTitle) => {
    try {
        const response = await fetch(`https://api.lyrics.ovh/v1/${artist}/${songTitle}`);
        const data = await response.json();

        const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g,'<br>');
    
        result.innerHTML = `<h2 id="lyricsHead"><strong>${songTitle}</strong> - ${artist}</h2>
        
        <p id="lyrics-display">${lyrics}</p>`;
    } catch (error) {
        console.log("Failed to retrieve lyrics", error);
    }
}


result.addEventListener("click",e => {
	const clickedButton = e.target;

	if(clickedButton.className === 'btn') {
		const artist = clickedButton.getAttribute('data-artist');
		const songTitle = clickedButton.getAttribute('data-songtitle');

		getLyrics(artist , songTitle);
	} 
})