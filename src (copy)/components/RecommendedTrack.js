
import React, { useState, useEffect } from 'react';
import './style.css';

const RecommendedTracks = () => {
const [recommendedTracks, setRecommendedTracks] = useState([]);
const [loading, setLoading] = useState(true);
const [currentTrack, setCurrentTrack] = useState(null);
useEffect(() => { // introduced use effect hook
    const fetchRecommendedTracks = async () => {
    const recommendedTracksEndpoint = 