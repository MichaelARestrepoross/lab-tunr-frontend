import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "./PlaylistDetails.css";

const API = import.meta.env.VITE_BASE_URL;


function PlaylistDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSongClick = (songId) => {
    navigate(`/songs/${songId}`);
  };

  const [playlist, setPlaylist] = useState({
    name: '',
    songs: [{
        id: "",
        name:"",
        artist:"",
        album:"",
        time:"",
        is_favorite:false
    }]
  });

  useEffect(() => {
    fetch(`${API}/playlists/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPlaylist(data);
      })
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div className='playlist-details-container'>
      <h2>{playlist.name}</h2>
      <ul>
        {playlist.songs.map(song => (
          <li key={song.id} className='song-item' onClick={() => handleSongClick(song.id)}>
            <div>Name: {song.name}</div>
            <div>Artist: {song.artist}</div>
            <div>Album: {song.album}</div>
            <div>Time: {song.time}</div>
            <div>Favorite: {song.is_favorite ? 'Yes' : 'No'}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlaylistDetails;
