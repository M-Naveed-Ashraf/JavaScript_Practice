function make_album(artist, album_title, tracks) {
    if(tracks){
        return {
            artist,
            album_title,
            tracks
        }
    } else {
        return {
            artist,
            album_title
        }
    }
}

console.log(make_album('abc', 'xyz'));
console.log(make_album('artist 1', 'album 1'));
console.log(make_album('artist 2', 'album 2', 3));