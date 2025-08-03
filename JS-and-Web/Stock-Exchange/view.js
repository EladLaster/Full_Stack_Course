export function showCompanyDetails(company) {
  const container = document.getElementById("companyDetails");
  container.innerHTML = `
    <h1>${company.companyName} (${company.symbol})</h1>
    <p><strong>Price:</strong> $${company.price}</p>
    <p><strong>Exchange:</strong> ${company.exchange}</p>
    <p><strong>Industry:</strong> ${company.industry}</p>
    <p><strong>CEO:</strong> ${company.ceo}</p>
    <p><em>${company.description}</em></p>
  `;
}


export function showStocksData(stocks) {
    const output = document.getElementById("output");
    output.innerHTML = "";

    stocks.forEach(stock => {
    const result = document.createElement("div");
    result.classList.add("result");

    const link = document.createElement("a");
    link.href = "company.html?symbol=" + stock.symbol;
    link.classList.add("stock-link");

    const heading = document.createElement("h2");
    heading.textContent = stock.companyName + " (" + stock.symbol + ")";

    link.appendChild(heading);
    result.appendChild(link);
    output.appendChild(result);
    });
}

export function showMessage(message) {
    const output = document.getElementById("output");
    output.innerText = message;
}
