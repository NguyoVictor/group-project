import { useEffect ,useState } from "react";
const DiscoveryPage = () => {
  // State variables for storing fetched data and loading state
  const [newReleases, setNewReleases] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
 
  // Function to fetch new releases
  useEffect(() => {
    fetch(
      `https://spotify23.p.rapidapi.com/albums/?${newReleases}ids=3IBcauSj5M2A6lTeffJzdv`, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'c734d28940msh83133f259efb5a2p1f1049jsn958d0c03907b',
          'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
      }
    )
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      setNewReleases(data.newReleases);
      setIsLoading(false); // Set loading state to false once data is fetched
    })
    .catch((error) => {
      console.error('Error fetching new releases:', error);
      setIsLoading(false); // Set loading state to false in case of error
    });
  }, []); 

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
    
    
        </div>
      )}
    </div>
  );
}
export default DiscoveryPage;