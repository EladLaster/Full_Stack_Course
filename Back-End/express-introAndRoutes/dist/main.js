const resultDiv = document.getElementById("results")
const input = document.getElementById("productInput")
const button = document.getElementById("checkBtn")
const resultDiv2 = document.getElementById("results2")
const input2 = document.getElementById("productInput2")
const button2 = document.getElementById("checkBtn2")
const money = document.getElementById("moneys");
const autoResults = document.getElementById("autoResults");


let myMoney = 1500;

money.textContent = myMoney;

async function checkPrice() {
    const productName = input.value;
    if(!productName) return;

    try {
        const res = await fetch(`/priceCheck/${productName}`)
        const data = await res.json()

        if (res.ok) {
            results.textContent = `Price: ${data.price}$`;
        } else {
            results.textContent = data.error || "Product not found";
        }

    } catch (err) {
        console.error("Error:", err)
        results.textContent = "Network error";
    }
    input.value = "" 
}

async function buyItem() {
    const productName = input2.value.trim();
    if (!productName) return;

    try {
        const priceRes = await fetch(`/priceCheck/${productName}`);
        const priceData = await priceRes.json();

        if (!priceRes.ok || priceData.price === null) {
            resultDiv2.textContent = "Product not found";
            return;
        }

        if (myMoney >= priceData.price) {
            const buyRes = await fetch(`/buy/${productName}`);
            const buyData = await buyRes.json();

            if (buyRes.ok) {
                myMoney -= priceData.price; 
                money.textContent = myMoney; 
                resultDiv2.textContent = `Congratulations, you've just bought ${buyData.name} for ${buyData.price}$. There are ${buyData.inventory} left now in the store.`;
            } else {
                resultDiv2.textContent = buyData.error || "Cannot buy product";
            }
        } else {
            resultDiv2.textContent = "Not enough money! You should get a job 😅";
        }

    } catch (err) {
        console.error("Error:", err);
        resultDiv2.textContent = "Network error";
    }

    input2.value = "";
}



button.addEventListener("click", checkPrice)
button2.addEventListener("click",buyItem)

input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        checkPrice()
    }
})
input2.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        buyItem()
    }
})

