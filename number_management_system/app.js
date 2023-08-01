  const express = require('express');
  const axios = require('axios');
  const app = express();
  const PORT = 8008;
  app.use(express.json());
  app.get('/numbers', async (req, res) => {
    try {
      const urls = req.query.url;
      if (!urls) {
        return res.status(400).json({ error: 'Invalid' });
      }
      const arr=[]
      const arr1=[]
      for(let i=0;i<urls.length;i++)
      {
        const res=await axios.get(urls[i]);
        const number=res.data.numbers;
        for(let j=0;j<number.length;j++)
        {
          arr.push(number[j])  
        }
      }
        arr.sort((a,b) => a-b);
        console.log(arr);
        let unique = arr.filter((c, index) => {
        return arr.indexOf(c) === index;
    });
    console.log(unique);
    res.send({numbers:unique})
    } 
    catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  });


  app.listen(PORT)