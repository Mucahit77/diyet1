const middleware = {
    requireAuthenticantion: function (req, res, next) {
        console.log("Özel Route Girildi!!");
        next();
    },
    logger: function (req, res, next) {
        console.log(req.method + " " + req.originalUrl);
        next();
    }
}
module.exports = middleware;