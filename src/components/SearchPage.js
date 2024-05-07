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
 }
}