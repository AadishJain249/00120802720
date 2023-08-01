const axios = require("axios");

// gettoken we created this function to get the response and from this
// we are getting our token 
const getToken = async () => {

  const url = "http://20.244.56.144/train/auth";
  const data = {
    companyName: "Train Central",
    ownerName: "Aadish Jain",
    ownerEmail: "aadishjain360@gmail.com",
    rollNo: "00120802720",
    clientID:process.env.Id,
    clientSecret: process.env.Secret,
  };
  const res = await axios.post(url, data);
  // console.log(res);
  // getting access_token from this
  return res.data;
};
module.exports = getToken;
