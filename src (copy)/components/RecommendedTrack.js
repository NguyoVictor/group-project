
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