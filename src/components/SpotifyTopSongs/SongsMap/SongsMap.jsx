const SongsMap = ({ songs }) => {
  console.log(songs);

  const summarySong = (name, artists) => {
    const newArtists = artists.map((artist) => artist.name).join(", ");
    const song = name + " - " + newArtists;

    if (song.length > 45) {
      return song.slice(0, 45) + "...";
    } else {
      return song;
    }
  };

  return (
    <ul className="flex flex-wrap gap-[10px] m">
      {songs.map((song, index) => (
        <div
          key={song.id}
          className="flex justify-start items-center bg-[#191414] p-2.5 gap-2 m-auto w-[300px]  "
        >
          <img src={song.album.images[0].url} className="h-[50px] w-[50px]" />
          <li>
            {songs.length > 3 ? index + 3 : index + 1}.{" "}
            {summarySong(song.name, song.artists)}
          </li>
        </div>
      ))}
    </ul>
  );
};
export default SongsMap;
