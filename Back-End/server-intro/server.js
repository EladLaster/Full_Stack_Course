//Exercise 1

const http = require('http');
const port = 3000;

const server = http.createServer(function (req, res) {

    console.log(`${req.method} ${req.url}`);

    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("Welcome to my server!");
    } else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("This is the about page");
    } else if (req.url === "/contact") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("You can contact me at: eladlaster1@gmail.com | +972-52-3802814");
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("404 - Page not found");
    }
    res.end();
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port} ...`);
});
