function errorHandling (err, req, res, next){
    const status = err.status || 500;
    res.status(status).json({
        message: err.message,
        errors: err.details || []
    });
};

module.exports = { errorHandling };
