
  
  
  export const exerciseOption= {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': '2639c27cedmshca5528421e9db65p1984f4jsn2d838a8090a0',
    },
  };
  export const youtubeOption = {
    method: 'GET',
  
    headers: {
      'X-RapidAPI-Key': '13e576291fmshb8b69a1a5636251p13c6bbjsn3c67d8767f9e',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
  

  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };