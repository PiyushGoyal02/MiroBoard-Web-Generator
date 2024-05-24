const express = require("express")
const axios = require('axios');
const app = express();
require("dotenv").config();
const cors = require("cors");

const PORT = process.env.PORT || 4000;

const DbConnect = require("./Config/DataBaseConnect")
DbConnect.DBConnect();

const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true
};

app.use(express.json());
app.use(cors(corsOptions));

app.get('/fetch-data', (req, res) => {

  axios.get(`https://api.miro.com/v2/boards/uXjVKFzLB5o%3D/items?parent_item_id=3458764589692842176&type=text`, {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.MIRO_ACCESS_TOKEN}`
    }
  })
  .then(apiResponse => {
    const items = apiResponse.data.data;
    console.log(items);

    // Sorting REST API Data...
    const sortedItems = items.sort((a, b) => {
      const posA = a.position || { x: 0, y: 0 };
      const posB = b.position || { x: 0, y: 0 };

      return posA.x - posB.x || posA.y - posB.y;   // Sort First x and then y...
    });
    res.status(200).json({
      message: 'Data fetched successfully',
      data: sortedItems
    });
  })
  
  .catch(error => {
    console.error('Error fetching data:', error);
    res.status(500).json({
      message: 'Failed to fetch data',
      error: error.message
    });
  });
});  

app.get ('/fetch-paymentData', (req, res) => {

  axios.get(`https://api.miro.com/v2/boards/uXjVKFzLB5o%3D/items?parent_item_id=3458764590110643500&type=text`,{
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.MIRO_ACCESS_TOKEN}`
    }
  })
  .then(apipaymentresponse => {
    const paymentdata = apipaymentresponse.data.data
    console.log(paymentdata)

    const paymentPosition = paymentdata.sort ((a,b) => {
      const posA = a.position ||{x:0 , y:0}
      const posB = b.position || {x:0, y:0}

      return posA.x - posB.x || posA.y - posB.y
    })
    return res.status(200).json({
      success:true,
      message:"Payment Data SuccessFully Fetch..",
      data:paymentPosition
    })
  })
  .catch(error => {
    console.error('Error fetching data:', error);
    res.status(500).json({
      message: 'Failed to fetch data',
      error: error.message
    });
  });
})

app.get("/", (req, res) => {
    res.send("Default Route Starting");
});

app.listen(PORT, () => {
    console.log(`Server Starting PORT ${PORT}`);
});