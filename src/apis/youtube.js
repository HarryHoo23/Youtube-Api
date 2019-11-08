import axios from 'axios';

 const KEY = 'AIzaSyB4bw1GgNSN_vMXctcNqEQ3nPDj168AjHY';
 
export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3',
   params: {
       part: 'snippet',
       maxResults : '5',
       key: KEY
   }
});


