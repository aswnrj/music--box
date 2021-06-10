const express = require("express")

const app = express();
app.use(express.static("public"));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/homepage.html");
});

app.get("/piano", function(req, res) {
    res.sendFile(__dirname + "/piano.html");
});

app.get("/drumkit", function(req, res) {
    res.sendFile(__dirname + "/drumkit.html");
});

app.listen(process.env.PORT || 3000, function () {
    console.log("Server running on port 3000.");
});