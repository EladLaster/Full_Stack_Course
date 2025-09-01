const express = require("express");
const { validPost } = require("./MiddleWare/postValidator");
const { errorHandling } = require("./MiddleWare/ErrorHander");
const validComment = require("./MiddleWare/commentValidator");
const { validationResult } = require("express-validator");
const app = express();
const PORT = 3030;

app.use(express.json());

const posts=[{ 
    id: 1,
    title: "My First Post", 
    content: "This is the first content...", 
    tags: ["javascript", "nodejs"]
    },
    { 
    id: 2,
    title: "My Second Post", 
    content: "This is the second content...", 
    tags: ["express"]
    }
]

const comments = [
  { content: "Great post!", email: "user1@example.com", postId: 1 },
  { content: "Very helpful", email: "user2@example.com", postId: 1 },
  { content: "Nice article", email: "user3@example.com", postId: 2 }
];

app.get("/posts",(req,res) => {
    res.json(posts);
})

app.post("/posts",validPost,(req,res) => {
    const post = req.body;
    posts.push(post);
    res.json({success: true, posts:posts})
})

app.get('/posts/:postId/comments', (req, res) => {
  const postId = Number(req.params.postId);
  const post = posts.find(p => p.id === postId);
  if (!post) 
    return res.status(404).json({ error: 'Post not found' });

  const postComments = comments.filter(c => c.postId === postId);
  res.json(postComments);
});

app.post('/posts/:postId/comments', validComment, (req, res) => {
  const postId = Number(req.params.postId);
  const post = posts.find(p => p.id === postId);
  if (!post) 
    return res.status(404).json({ error: 'Post not found' });

  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const { content, email } = req.body;
  const newComment = { content, email, postId };
  comments.push(newComment);

  res.status(201).json({ message: 'Comment added', comment: newComment });
});

app.use(errorHandling);

app.listen(PORT,()=> {
    console.log(`server run on port ${PORT}`)
})