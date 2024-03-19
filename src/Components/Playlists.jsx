import { useState, useEffect } from "react";
import Playlist from "./Playlist";
import "./Playlists.css";

const API = import.meta.env.VITE_BASE_URL;

function Playlists() {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    fetch(`${API}/playlists`)
      .then((res) => res.json())
      .then((data) => {
        setPlaylists(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="Playlists">
      <section>
        <h2>Playlists</h2>
        <div className="playlist-container">
          {playlists.map((playlist) => (
            <Playlist key={playlist.id} playlist={playlist} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Playlists;
