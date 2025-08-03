import { getStockMock } from './model.js';
import { showStocksData, showMessage } from './view.js';

const searchBtn = document.getElementById("searchBtn");
const inputSymbol = document.getElementById("inputSymbol");
const loading = document.getElementById("loading");



async function loadStock(symbol) {
    showMessage("");
    loading.style.display = "block";

    try {
        const stocks = await getStockMock(symbol);
        if (stocks.length > 0) {
        showStocksData(stocks);
        } else {
        showMessage("No data found for " + symbol);
        }
    } catch (err) {
        showMessage("Error fetching data");
        console.error(err);
    } finally {
        loading.style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
  const symbol = inputSymbol.value.trim().toUpperCase();
  loadStock(symbol);
  inputSymbol.value = "";
});

inputSymbol.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    const symbol = inputSymbol.value.trim().toUpperCase();
    loadStock(symbol);
    inputSymbol.value = "";
  }
});
