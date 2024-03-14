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
  });

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
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
        <input type="submit" />
      </form>
      <Link to={`/songs/${id}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  )
}

export default SongEditForm