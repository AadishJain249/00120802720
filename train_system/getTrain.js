const axios = require("axios");

//after getting token we are setting token in the header 
const getTrain = async (getToken) => {
  const url = "http://20.244.56.144/train/trains";
  const res = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${getToken}`,
    },
  });
  return res.data;
};
module.exports = getTrain;
