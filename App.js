const express = require('express');
const app = express()
const port = 3000
const path = require("path");

// Tell express static files located inside 'src' folder and join the path it with directory path.
app.use(express.static(path.join(__dirname, 'src')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})


