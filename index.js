const express = require("express");
const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

const array = [324, 634, 234, 6544, 23, 76, 234, 654];

app.get("/getRandomNumbers", (req, res) => {
  return res.status(200).json({ randomNumbers: array });
});

app.get("/getRandomNumber", (req, res) => {
  const randomNum = Math.ceil(Math.random()*10001);
  return res.status(200).json({ randomNumber: randomNum });
});


// Sukurti papildoma endpoint'ą 'getSortedNumbers', pasiimt masyva bei išrūšiuoti bei gražinti skaičius didėjimo tvarka.
app.get("/getSortedNumbers", (req, res) => {
  array.sort((a, b) => {
    return a - b;
  });

  return res.status(200).json({ getSortedNumbers: array});
});



// Sukurti endpoint'ą 'getMaxNumber', kuris gražins didžiausią skaičių.
app.get("/getMaxNumber", (req, res) => {
  const maxNumber = array.reduce((acc, curr) => {
    if (acc < curr) {
      return curr;
    } if (curr < acc) {
      return acc;
    }
  });
  return res.status(200).json({getMaxNumber: maxNumber})
})


app.listen(8081, () => {
  console.log("Your app is alive!!!!!");
});

// var cors = require("cors");
// app.use(cors());
