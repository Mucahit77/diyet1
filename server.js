var express = require("express");
var app 	= express();
var PORT = 3000;

var middleware = {
	requireAuthenticantion: function (req, res, next) {
		console.log("Özel Route Girildi!!");
		next();
	},
	logger: function (req, res, next) {
		console.log(req.method + " " + req.originalUrl);
		next();
	}
}

//app.use(middleware.requireAuthenticantion);
app.use(middleware.logger);

app.get("/hakkimda", middleware.requireAuthenticantion, function (req, res) {
	res.send("Hakkımda Sayfası!!");
})

app.use(express.static(__dirname + '/public'));


app.listen(PORT, function () {
	console.log("Express server " + PORT + " nolu portta çalışıyor")
});