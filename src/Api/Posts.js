import axios from 'axios';


export const fetchPosts = () => {

  
  return  axios({
    url: `https://fireupdesign.com/admin/api/allportfolio`,
    method: "GET"
  
  });

};