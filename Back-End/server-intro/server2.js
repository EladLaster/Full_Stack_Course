//Exercise 2

const http = require('http');
const port = 3000;

 let users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" }
];

function sendJSON(res,status, data) {
  res.writeHead(status, { "Content-Type": "application/json" });
  res.end(JSON.stringify(data));
}

function sendError(res, status = 404, msg = "User Not Found") {
  sendJSON(res, status, { error: msg });
}


function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", chunk => {
      body += chunk.toString();
    });
    req.on("end", () => {
      if (!body) {
        return reject(new Error("Empty body"));
      }
      try {
        const data = JSON.parse(body);
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  });
}


const server = http.createServer( async (req,res) => {

    const urlParts = req.url.split('/').filter(Boolean);
    console.log(`${req.method} ${req.url}`);
    
    if (req.method === "GET" && req.url === "/api/users") {
            sendJSON(res, 200, users);
        }

    else if (req.method === "GET" && urlParts[0] === "api" && urlParts[1] === "users" && urlParts[2]) {
        const id = parseInt(urlParts[2]);
        const user = users.find(u => u.id === id);
        if (user) {
            sendJSON(res, 200, user);
        } else {
            sendError(res);
        }
    }

    else if (req.method === "POST" && req.url === "/api/users"){
        try{
            const newUser = await readBody(req);
            if(newUser.name && newUser.email){
                newUser.id = users.length ? users[users.length - 1].id + 1 : 1;
                users.push(newUser);
                sendJSON(res,201,newUser);
            }
            else{
                sendError(res,400,"Missing name or email");
                return;
            }
        }
        catch{
            sendError(res, 400, "Invalid JSON format");
        }
    }

    else{
        sendError(res);
    }

})

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port} ...`);
})