// const express = require("express")
// const app = express();
// const port = process.env.PORT || 3000;

// app.get('/', (req, res) =>{
//     res.send('Hello, world!');
// });

// app.listen(port, () => {
//     console.log(`Aplikacja dziala na porcie ${port}`);
// });

const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) =>{
    
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
    console.log(`Aplikacja działa na porcie ${port}`);
});
