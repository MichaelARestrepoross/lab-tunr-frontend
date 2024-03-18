import React from 'react';
import { useNavigate } from "react-router-dom";
import "./Playlist.css"

function Playlist({ playlist }) {
  const navigate = useNavigate();
  
  const handlePlaylistClick = () => {
    navigate(`/playlists/${playlist.id}`);
  };

  return (
    <div className="playlist" onClick={() => handlePlaylistClick(playlist.id)}>
      {playlist.name}
    </div>
  );
}

export default Playlist;
