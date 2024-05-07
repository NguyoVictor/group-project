import React, { useState } from "react";

// Function for the SearchPage
const SearchPage = () => {
 // State to manage the search query
 const [query, setQuery] = useState('');
 // State to store the search results from API
 const [searchResults, setSearchResults] = useState('');
 // API key obtained
 const API_KEY = 'd65d099f81mshfb46b6e8c0d8ddfp16ee3bjsnc801f6cbf524';

 // Function to handle the search operation
 const handleSearch = () => {
    // Make a GET request to the API using fetch
    fetch(`https://spotify23.p.rapidapi.com/search?q=${query}`, {
        method: 'GET',
        headers: {
            'x-rapidapi-key': API_KEY,
            'x-rapidapi-host': 'spotify23.p.rapidapi.com',
            'useQueryString': true
        }
    })
    
    .then(response => {
        // Check if the response status is ok
        if(!response.ok) {
            throw new Error('Network responese was not ok');
        }
        // Parse the JSON data from the response
        return response.json();
    })
    .then(data => {
        // Update the state with the search results
        setSearchResults(data);
    })
    .catch(error => {
        // Handle any errors that occur during the fetch operation
        console.error('Error searching:', error);
    });
 };
}
