const karaoke = {};
// karaoke is an object, and we are adding methods (functions) to it

karaoke.apiKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWU2OTcxYTg5MDk0Y2QwNDNiNzFlNmYzIn0sImlhdCI6MTU4Mzk2ODY4MCwiZXhwIjoxNjE1NTA0NjgwfQ.1AqQOK_XVfkAzqgmK1Zbd-T1uVUjjsP163epH0nNIEc`
karaoke.retroBaseUrl = `https://retroapi.hackeryou.com/api`;
karaoke.lyricsBaseUrl = 'https://api.lyrics.ovh/v1';
karaoke.$songTitle = $('.songTitle');
karaoke.$artist = $('.artist');
karaoke.$lyrics = $('.lyrics');
karaoke.init =() => {
    let curtainOpens = 0;

    // gets a song title/artist 
    karaoke.setSong();
    // curtainOpens = curtainOpens + 1;
    // gets lyrics
    
    // prints this info to page
    $('.curtain').on('click', function(){

        const clicksIsEven = curtainOpens % 2 === 0;
        if (clicksIsEven){
        // if (curtainOpens % 2 === 0 ){
            karaoke.setSong();
        }
        curtainOpens = curtainOpens +1;
        console.log(curtainOpens)
    });
}
karaoke.setSong = () =>{
    const allRetroDetails = karaoke.getRetroDetails();
    // get all media fromt the API
    allRetroDetails.done(response =>{
        // console.log(response)
        const randomYear = karaoke.getRandomElement(response);
        // console.log(randomYear);
        const randomSong = karaoke.getRandomElement(randomYear.songs);
       
        const artist = karaoke.formatArtist(randomSong.artist)
        const title = randomSong.title;

        karaoke.$songTitle.text(title);
        karaoke.$artist.text(artist);
        const lyrics = karaoke.getLyrics(artist, title);
        lyrics.done(response =>{
            console.log(response)
            karaoke.$lyrics.text(response.lyrics)
        // karaoke.formatArtist(randomSong.artist);
        // console.log(randomSong);
    });

});
}
karaoke.getLyrics = (artistName, songTitle) =>{
    const lyricsResponse = $.ajax({
        url:`${karaoke.lyricsBaseUrl}/${artistName}/${songTitle}`,
        method: 'GET',
        dataType:'json'
    })
    return lyricsResponse;
}
karaoke.formatArtist =(artistName) =>{
    const soloArtist = artistName.split('feat.')[0].trim();
    const formattedAndArtist = soloArtist.replace('and', ' &').trim();
    return formattedAndArtist;
}


karaoke.getRandomElement = (array) => {
    const i = Math.floor(Math.random() * array.length);
    return array[i];
  };
// const printZ = ()=>{
//     let x;
//     setTimeout(function(){
//         x = 5

//     })
// }
karaoke.getRetroDetails = () => {
    const yearsResponse = $.ajax({
        url: `${karaoke.retroBaseUrl}/years`,
        method:'GET',
        dataType:'json',
        data:{
            apiKey: karaoke.apiKey
        }
    });
    return yearsResponse;
};
$(document).ready(function() {
    karaoke.init();
});