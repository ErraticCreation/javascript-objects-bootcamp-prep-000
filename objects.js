var playlist = { Slipknot: "Wait and Bleed" };

var updatePlaylist = function(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}

console.log(updatePlaylist(playlist, "KoRn", "Alone I Break"));