
import React, { useState, useEffect } from 'react';
import './style.css';

const RecommendedTracks = () => {
const [recommendedTracks, setRecommendedTracks] = useState([]); // initialization
const [loading, setLoading] = useState(true);
const [currentTrack, setCurrentTrack] = useState(null);
useEffect(() => { // introduced use effect hook
    const fetchRecommendedTracks = async () => {
    const recommendedTracksUrl= 'https://spotify23.p.rapidapi.com/recommendations/?seed_artists=0oSGxfWSnnOXhD2fKuz2Gy&seed_tracks=3dRfiJ2650SZu6GbydcHNb&seed_genres=classical&limit=90';
    const options = {
    method: 'GET',
    headers: {
    'X-RapidAPI-Key': 'c734d28940msh83133f259efb5a2p1f1049jsn958d0c03907b',
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
    };
    try { // introduced try and catch 
        const response = await fetch(recommendedTracksUrl, options);
        const data = await response.json();
        // Extract relevant information from the response
        const tracks = data.tracks.map(track => ({
        name: track.name,
        artist: track.artists.map(artist => artist.name).join(', '),
        album: track.album.name,
        preview_url: track.preview_url,
        cover_url: track.album.images.length > 0 ? track.album.images[0].url : null
        }));
        setRecommendedTracks(tracks);
        setLoading(false);
        } catch (error) {
        console.error('Error fetching recommended tracks:', error);
        }
    }
    fetchRecommendedTracks(); // invoke function
}, []);
// introduced a function to handle playing and pausing tracks when playing
const handlePlayTrack = (previewUrl) => {
if (currentTrack === previewUrl) {
// If the same track is clicked again, pause it
setCurrentTrack(null);
} else {
// Otherwise, play the track
setCurrentTrack(previewUrl);
}
};
return (
    <div>
        <h2>Discover Recommended Tracks</h2>
        {loading ? (
            <p>Loading...</p>
        ) : (
            <ul>
       {recommendedTracks.map((track, index) => (//iterate over the tracks
             <li key={index}>
                 {track.cover_url && (
                       <img
                 src={track.cover_url}
                   alt={`${track.name} cover`}
                    onClick={() => handlePlayTrack(track.preview_url)}
                 style={{ cursor: 'pointer' }}
                            />// used audio to basic playback controls
           )}
              <strong>{track.name}</strong> by {track.artist} from the album {track.album}
           {currentTrack === track.preview_url && (
         <audio controls autoPlay>
             <source src={track.preview_url} type="audio/mpeg" />
              </audio>
                        )}
                    </li>
                ))}
            </ul>
        )}
    </div>
);
};

export default RecommendedTracks;