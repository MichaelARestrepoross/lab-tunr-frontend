import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_BASE_URL;

function SongNewForm() {
  const navigate = useNavigate();
  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
    playlist_id:1,
  });
  const [playlists, setPlaylists] = useState([]);

  
  // Add a songs. Redirect to the index view.
  function addSong(){
      fetch(`${API}/songs`, {
          method: "POST",
          body: JSON.stringify(song),
          headers: {
              "Content-Type": "application/json",
            },
        })
        .then(() => {
            navigate(`/songs`);
        })
        .catch((error) => console.error("catch", error));
    };
    
    const handleTextChange = (event) => {
        setSong({ ...song, [event.target.id]: event.target.value });
    };
    
    const handleCheckboxChange = () => {
        setSong({ ...song, is_favorite: !song.is_favorite });
    };

    const handlePlaylistChange = (event) => {
      setSong({ ...song, playlist_id: event.target.value });
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        addSong();
    };
    
    useEffect(() => {
      fetch(`${API}/playlists`)
        .then((res) => res.json())
        .then((data) => {
          setPlaylists(data);
        })
        .catch((error) => console.error(error));
    }, []);
    
    return (
        <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={song.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Song"
          required
        />
        <label htmlFor="artist">Artist:</label>
        <input
          id="artist"
          type="artist"
          required
          value={song.artist}
          placeholder="Artist name..."
          onChange={handleTextChange}
        />
        <label htmlFor="album">Album:</label>
        <input
          id="album"
          type="text"
          value={song.album}
          placeholder="Album name..."
          onChange={handleTextChange}
        />
        <label htmlFor="time">Duration:</label>
        <input
          id="time"
          type="text"
          value={song.time}
          placeholder="1:30" 
          onChange={handleTextChange}
        />
        <label htmlFor="is_favorite">Favorite:</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={song.is_favorite}
        />
        <br />
        <br />
        <label htmlFor="playlist_id">Playlist:</label>
        <select id="playlist_id" onChange={handlePlaylistChange}>
          {playlists.map((playlist) => (
            <option key={+playlist.id} value={+playlist.id}>
              {playlist.name}
            </option>
          ))}
        </select>
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default SongNewForm