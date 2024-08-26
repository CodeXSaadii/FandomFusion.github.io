
function getMovie() {
    var searchTerm = document.getElementById("ID_Input").value;
    fetch(`http://www.omdbapi.com/?t=${searchTerm}&apikey=23ceb873`)
        .then(response => response.json())
        .then(data => {
            var { Title, Year, Rated, Released, Runtime, Genre, Director, Actors, Plot, Language, Poster } = data;
            document.getElementById("movieDetails").innerHTML = `
                <h2>${Title} <span>(${Year})</span></h2>
                <img src="${Poster}" alt="Movie Poster">
                    <p><strong>Rated:</strong> ${Rated}<br>
                    <strong>Released:</strong> ${Released}<br>
                    <strong>Runtime:</strong> ${Runtime}<br>
                    <strong>Genre:</strong> ${Genre}<br>
                    <strong>Director:</strong> ${Director}<br>
                    <strong>Actors:</strong> ${Actors}</p>
            `;
        })
        .catch(error => console.error('Error:', error));
}
