function errorHandling(err, req, res, next) {
    console.error(`[ERROR] ${err.message}`);
    res.status(400).json({ error: err.message });
}

module.exports = { errorHandling };
