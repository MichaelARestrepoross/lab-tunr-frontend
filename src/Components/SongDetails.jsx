import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
const API = import.meta.env.VITE_BASE_URL;

function SongDetails() {
  const [song, setSong] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}/songs/${id}`)
    .then((response) => response.json())
    .then((data) => setSong(data))
    .catch((error) => console.error(error));
  }, [id]);

  function deleteSong () {
    fetch(`${API}/songs/${id}`, {
      method: 'DELETE',
    })
    .then(() => navigate(`/songs`))
    .catch((error) => console.error(error))
  }

  return (
    <article>
      <h3>{song.is_favorite ? <span>⭐️</span> : null} {song.name}</h3>
      <h3>Artist: {song.artist}</h3>
      <h3>Album: {song.album}</h3>
      <h3>Duration: {song.time}</h3>  
      <div className="showNavigation">
        <div>
          <Link to={`/songs`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/songs/${id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          <button onClick={deleteSong}>Delete</button>
        </div>
      </div>
    </article>
  );

}

export default SongDetails