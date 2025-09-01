const users = require("../DB/users");

function checkResourceExists(req, res, next) {
    const id = Number(req.params.id);

    const user = users.find(u => u.id === id);

    if (!user) {
        return next(new Error("user not found"));
    }

    req.user = user;
    next();
}

module.exports = { checkResourceExists };
