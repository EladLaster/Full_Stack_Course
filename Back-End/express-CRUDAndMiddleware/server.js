const express = require("express");
const app = express();
const PORT = 3030;

app.use(express.json());

const wordCounter = {"hello": 4 ,"world":3};

app.get('/sanity',(req,res) => {
    res.send("Server is up and running");
})

app.get('/words', (req,res) => {
    res.json(wordCounter)
})

app.get('/word/:word',(req,res) => {
    const word = req.params.word;
    const count = wordCounter[word] || 0;
    res.json({count});
})

app.post('/word', (req, res) => {
    const { word } = req.body;
    if (!word) {
        return res.status(400).json({ error: "Missing 'word' in request body" });
    }
    if (!/^\w+$/.test(word)) {
        return res.status(400).json({ error: "Word must be a single word without spaces or special characters" });
    }
    wordCounter[word] = (wordCounter[word] || 0) + 1;
    res.json({
        text: `Added ${word}`,
        currentCount: wordCounter[word]
    });
});

app.post('/sentence', (req, res) => {
    const { sentence } = req.body;
    if (!sentence) {
        return res.status(400).json({ error: "Missing 'sentence' in request body" });
    }

    const words = sentence.split(" ");
    let numNewWords = 0;
    let numOldWords = 0;
    const counts = {};

    words.forEach(word => {
        if (wordCounter[word]) {
            numOldWords++;
        } else {
            numNewWords++;
        }
        wordCounter[word] = (wordCounter[word] || 0) + 1;
        counts[word] = wordCounter[word];
    });

    res.json({
        text: `Added ${numNewWords} words, ${numOldWords} already existed`,
        currentCount: counts
    });
});

app.delete('/word/:word', (req, res) => {
    const word = req.params.word;

    if (!(word in wordCounter)) {
        return res.status(400).json({ error: word +" didn't exist in 'wordCounter'" });
    }

    delete wordCounter[word];

    res.json({
        text: `Deleted ${word}`,
        currentWords: wordCounter
    });
});




app.listen(PORT,()=>{
    console.log("the server run on port : " + PORT );
})