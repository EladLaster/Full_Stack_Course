function validateId(req, res, next) {
    const id = req.params.id;

    if (isNaN(Number(id))) {
        return next(new Error("invalid id format"));
    }
    next();
}

module.exports = { validateId };