async function fetchData(url, headers = {}) {
    try {
      const response = await fetch(url, { headers });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  export default fetchData;