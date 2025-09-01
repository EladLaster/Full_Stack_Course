const { errorHandling } = require("./MiddleWare/ErrorHander");
const { logger } = require("./MiddleWare/logging");
const { requestCount } = require("./MiddleWare/requestCounter");
const { validateId } = require("./MiddleWare/validation");
const { checkResourceExists } = require("./MiddleWare/ResourceExists");
const users = require("./DB/users");

const express = require("express");
const app = express();
const PORT =3030;

app.use(logger);
app.use(requestCount);
app.use(express.json());

app.get('/',(req,res) => {
    res.json({
        message: "Welcome!",
        requestCount: req.requestCount
    });
})

app.get('/about', (req,res) => {
    res.json({
        message: "about!",
        requestCount: req.requestCount
    });
})

app.get('/users',(req,res) => {
    res.json(users);
})

app.get('/users/:id',validateId,checkResourceExists,(req,res) => {
     res.json({ user: req.user })
})

app.post("/users", (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ error: "Name is required" });
    }
    users.push(name);
    res.status(201).json({ message: "User created", users });
});

app.use(errorHandling);

app.listen(PORT,()=>{
    console.log(`app running on port : ${PORT}`);
})
