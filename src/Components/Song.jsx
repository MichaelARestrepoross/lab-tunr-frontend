import { useNavigate } from "react-router-dom";
import "./Song.css"; // Import CSS file for styling

function Song({ song }) {
  const navigate = useNavigate();
  
  const handleSongClick = () => {
    navigate(`/songs/${song.id}`);
  };

  return (
    <tr className="song-row" onClick={handleSongClick}>
      <td>{song.is_favorite ? <span>⭐️</span> : <span>&nbsp; &nbsp; &nbsp;</span>}</td>
      <td>{song.name}</td>
      <td>{song.artist}</td>
      <td>{song.time}</td>
    </tr>
  );
}

export default Song;
