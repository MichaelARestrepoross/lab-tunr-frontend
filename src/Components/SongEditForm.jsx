import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_BASE_URL;

function SongEditForm() {
  let { id } = useParams();
  const navigate = useNavigate();

  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
    playlist_id: null,
  });

  const [playlists, setPlaylists] = useState([]);

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  const handlePlaylistChange = (event) => {
    setSong({ ...song, playlist_id: event.target.value });
  };

  // Update a song. Redirect to show view
  const updateSong = () => {
    fetch(`${API}/songs/${id}`, {
      method: "PUT",
      body: JSON.stringify(song),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => navigate(`/songs/${id}`))
      .catch((error) => console.error("catch", error));
  };

  useEffect(() => {
    fetch(`${API}/playlists`)
      .then((res) => res.json())
      .then((data) => {
        setPlaylists(data);
      })
      .catch((error) => console.error(error));
  }, []);

  // On page load, fill in the form with the song data.
  useEffect(() => {
    fetch(`${API}/songs/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSong(data);
      })
      .catch((error) => console.error(error));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateSong();
  };

  return (
    <div className="Edit">
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
            <option
              key={+playlist.id}
              value={+playlist.id}
              selected={+song.playlist_id === +playlist.id} 
              // Set selected based on the current playlist ID
            >
              {playlist.name}
            </option>
          ))}
        </select>
        <br />
        <input type="submit" />
      </form>
      <Link to={`/songs/${id}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  )
}

export default SongEditForm