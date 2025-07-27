// details : https://developer.themoviedb.org/reference/tv-series-popular-list
const options1 = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/tv/popular',
  params: {language: 'en-US', page: '1'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhODI1ZDA0YzhjNTY0YTdjYjA5NTMwNDRjYzM5YjJlZiIsIm5iZiI6MTc1MzQ1NzU3NS4xNzEsInN1YiI6IjY4ODNhM2E3Y2Y3MTI2Y2Q1YWY3N2Y5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.73DfZA71E3BQa-8f5cgdQJlHUWC0uKt_s_wx9b4gMaM'
  }
};
// details : https://developer.themoviedb.org/reference/genre-movie-list
const options2 = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/genre/movie/list',
  params: {language: 'en-US', page: '1'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhODI1ZDA0YzhjNTY0YTdjYjA5NTMwNDRjYzM5YjJlZiIsIm5iZiI6MTc1MzQ1NzU3NS4xNzEsInN1YiI6IjY4ODNhM2E3Y2Y3MTI2Y2Q1YWY3N2Y5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.73DfZA71E3BQa-8f5cgdQJlHUWC0uKt_s_wx9b4gMaM'
  }
};




(async function () {
    try {
        const responMovie = await axios.request(options1);
        try{
            const responGenre = await axios.request(options2);
            const { data: { results: resultMovies } } = responMovie;
            const { data: { genres: resultGenres } } = responGenre;

            let newData = [];
             
            newData = resultMovies.map(
                ({name, overview, firts_air_date, poster_path, genre_ids}) =>({
                    title: name,
                    description: overview,
                    release_date : firts_air_date,
                    poster: `https://image.tmdb.org/t/p/w500${poster_path}`,
                    // genre_ids = []
                    genres: genre_ids.map((ele_map) => { // finding genre_id[i] = resultGenres
                        const genreMatch = resultGenres.find(({id}) => id === ele_map);
                        //if genre_id not match with any GenreList -> return unknown
                        if(genreMatch == undefined){ 
                            return 'unknown';
                        }
                        let temp = genreMatch.name;
                        return temp;
                    })
                    
                })
            );
            // done complete data with genres
            // console.log(newData);
           

            const locContent = document.querySelector("div#content-area");
            for(let i = 0; i < newData.length; i++){

                // make div card with styling from tailwind
                const card = document.createElement("div");
                card.className = "flex flex-col";
                // make img add the path of the image and styling
                const eleposter = document.createElement("img");
                eleposter.src = newData[i].poster;
                eleposter.className = "max-w-64 rounded-md";
                // make span for title poster
                const eleTitle = document.createElement("span");
                eleTitle.className = "text-2xl font-bold";
                eleTitle.textContent = newData[i].title;
                // make a for genre 
                const containerGenre = document.createElement("div");
                containerGenre.className = "flex flex-row gap-5 flex-wrap";
                for(let j = 0; j < newData[i].genres.length; j++){
                    const genreLabel = document.createElement("a");
                    genreLabel.className = "inline-block px-4 py-2 rounded-md bg-[#A0A3BD1A] text-[#A0A3BD] hover:bg-blue-700 hover:text-white transition";
                    genreLabel.textContent = newData[i].genres[j];
                    containerGenre.append(genreLabel);
                }
                card.append(eleposter);
                card.append (eleTitle);
                card.append(containerGenre);
                locContent.append(card);
            }

        }catch(err){
            throw err;
        }

    } catch (err) {
        console.log(err);
    }
})();

