const logger = (req, res, next) => {
    console.log(req.url);
    console.log(new Date().getFullYear());
    next()
}

module.exports = logger;