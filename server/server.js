const express = require("express");
const app = express();
const path = require("path");
const pg = require("pg");
const Pool = pg.Pool;
app.use("/build", express.static(path.join(__dirname, "../build")));
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "../index.html")));


app.use('*', (req, res) => {
	res.status(404).send('not found');
})
app.listen(3000);
