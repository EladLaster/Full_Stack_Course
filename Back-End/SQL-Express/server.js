require('dotenv').config();
const express = require("express");
const { sequelize , User} = require("./db/models");
const { json } = require('sequelize');
const app = express();
const PORT = 3030;
console.log('DB_CONNECTION:', process.env.DB_CONNECTION);

app.use(express.json());

// ROW QUERIES
 
app.get("/Users", async (req, res) => {
  try {
    const [result,metadata] = await sequelize.query("SELECT * FROM Users");

    if (!result || result.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }

    console.log(result);
    res.json(result);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


app.get("/users/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) 
      return res.status(400).json({ error: "Invalid user id" });

    const query = `SELECT * FROM Users WHERE id=:id`;
    const [result,metadata] = await sequelize.query(query, { replacements: { id } });

    if (result.length === 0) 
      return res.status(404).json({ error: "User not found" });

    console.log(result[0]);
    res.json(result[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

  app.post("/Users", async (req, res) => {
  try {
    const { firstName, email, age } = req.body;

    if (!firstName || !email || !age) {
      return res.status(400).json({ error: "firstName, email and age are required" });
    }

    const query = `
      INSERT INTO Users (firstName, email, age,createdAt,updatedAt)
      VALUES (:firstName, :email, :age,NOW(),NOW())
    `;

    const [createdId] = await sequelize.query(query, {
      replacements: { firstName, email, age },
    });

    const [result,metadata] = await sequelize.query("SELECT * FROM Users WHERE id = :id", {
      replacements: { id: createdId },
    });

    console.log(result[0]);
    res.json(result[0]);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// ORM

app.get("/ORM/Users", async (req, res) => {
  try {
    const users = await User.findAll({raw: true});

    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }

    console.log(users);
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


app.get("/ORM/users/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) 
      return res.status(400).json({ error: "Invalid user id" });

    const user = await User.findAll({where: { id },raw: true});
    
    if (!user) 
      return res.status(404).json({ error: "User not found" });

    console.log(user);
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

  app.post("/ORM/Users", async (req, res) => {
  try {
    const { firstName, email, age } = req.body;

    if (!firstName || !email || !age) {
      return res.status(400).json({ error: "firstName, email and age are required" });
    }

    const user = await User.create({
    firstName,
    email,
    age
    });

    console.log(user.dataValues);
    res.json(user.dataValues);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});




async function testConnection() {
 try {
   await sequelize.authenticate();
   console.log('✅ Database connection established successfully.');
 } catch (error) {
   console.error('❌ Unable to connect to database:', error);
 }
}

app.listen(PORT,async ()=>{
    console.log(`server run on port: ${PORT}`);
    await testConnection();
})