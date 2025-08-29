const express = require("express");
const app = express();
const path = require("path");
const port = 3000

const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]


// app.get('/', (req, res) => {
//   res.send('Server is up and running smoothly')
// })

app.use(express.static(path.join(__dirname, 'dist')))

app.get('/priceCheck/:name',(req,res) => {
    const productName = req.params.name;
    const product  = store.find(obj => obj.name === productName)

    if (!product) return res.status(404).json({ error: "Product not found" });

    res.json({"price": product ? product.price : null});
})

app.get('/buy/:name',(req,res) => {
    const productName = req.params.name;
    const product = store.find(obj => obj.name === productName)

    if (!product) return res.status(404).json({ error: "Product not found" });
    if (product.inventory <= 0) return res.status(400).json({ error: "Out of stock" });

    product.inventory -= 1
    res.json(product)
})

app.get('/sale', (req, res) => {
    const isAdmin = req.query.admin === 'true';
    
    if (isAdmin) {
        store.forEach(obj => {
            if (obj.inventory > 10) {
                obj.price = obj.price * 0.5;
            }
        });
    }

     res.json(store);
});



app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})