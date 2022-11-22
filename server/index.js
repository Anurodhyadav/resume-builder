const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/getAccessToken", async (req, res) => {
  try {
    const token = req.query.token;

    let headersList = {
      "Content-Type": "application/x-www-form-urlencoded",
    };

    let bodyContent = `grant_type=authorization_code&code=${token}&client_id=86inopqec1xfly&client_secret=SnweqQtf72g37t5t&redirect_uri=http://localhost:3000/callback`;

    let reqOptions = {
      url: "https://www.linkedin.com/oauth/v2/accessToken",
      method: "POST",
      headers: headersList,
      data: bodyContent,
    };

    let response = await axios.request(reqOptions);

    const access_token = response.data.access_token;

    const profileInfo = await axios.get(`https://api.linkedin.com/v2/me`, {
      headers: { Authorization: `Bearer ${access_token}` },
    });
    res.json(profileInfo.data);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.listen("8000", () => {
  console.log("server is listening at server port: 8000");
});
