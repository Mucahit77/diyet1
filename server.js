const express = require("express");
const middleware = require("./middleware");
const app 	= express();
const PORT = process.env.PORT || 3000;



//app.use(middleware.requireAuthenticantion);
app.use(middleware.logger);

app.get("/hakkimda", middleware.requireAuthenticantion, function (req, res) {
	res.send("Hakkımda Sayfası!!");
})

app.use(express.static(__dirname + '/public'));


app.listen(PORT, function () {
	console.log("Express server " + PORT + " nolu portta çalışıyor")
});