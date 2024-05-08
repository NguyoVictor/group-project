import React, { useState, useEffect } from 'react';
import './style.css';

const RecommendedTracks = () => {
  const [recommendedTracks, setRecommendedTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentTrack, setCurrentTrack] = useState(null);

  useEffect(() => {
    const fetchRecommendedTracks = async () => {
   
      const recommendedTracksEndpoint = 'https://spotify23.p.rapidapi.com/recommendations/?seed_artists=0oSGxfWSnnOXhD2fKuz2Gy&seed_tracks=3dRfiJ2650SZu6GbydcHNb&seed_genres=classical&limit=90';
      
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'c734d28940msh83133f259efb5a2p1f1049jsn958d0c03907b',
          'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(recommendedTracksEndpoint, options);
        const data = await response.json();
        
        // Extract relevant information from the response
        const tracks = data.tracks.map(track => ({
          name: track.name,
          artist: track.artists.map(artist => artist.name).join(', '),
          album: track.album.name,
          preview_url: track.preview_url,
          cover_url: track.album.images.length > 0 ? track.album.images[0].url : null
        }));
        
      
  return (
    <div>
      <h2>Recommended Tracks</h2>
      {loading ? (
        <p>Loading...</p>
      ) 
    </div>
  );
};

export default RecommendedTracks;
