import React, { useState, useEffect } from 'react';

const LibrarySection = () => {
    const [playlists, setPlaylists] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPlaylists = async () => {
            const playlistUrl = 'https://spotify23.p.rapidapi.com/playlist_tracks/?id=37i9dQZF1DX4Wsb4d7NKfP&offset=0&limit=100';
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': '3509af7823msha08596116c3770ap1b2ab7jsna490778b83c0',
                    'x-rapidapi-host': 'spotify23.p.rapidapi.com'
                }
            };
            try {
                const response = await fetch(playlistUrl, options);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setPlaylists(data.tracks || []);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching playlists:', error);
            }
        };
        fetchPlaylists();
    }, []);

    return (
        <div>
            <h2>Library Playlists</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="playlist-container">
                    {playlists.map((playlist, index) => (
                        <div key={index} className="playlist-card">
                            <h3>{playlist.name}</h3>
                            <p>Total tracks: {playlist.tracks.length}</p>
                            <p>Owner: {playlist.owner}</p>
                            <ul>
                                {playlist.tracks.map((track, trackIndex) => (
                                    <li key={trackIndex}>{track.name}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LibrarySection;
