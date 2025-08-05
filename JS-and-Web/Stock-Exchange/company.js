import { getStockMock } from './model.js';
import { showCompanyDetails, showMessage } from './view.js';
import {Marquee} from './marquee.js';

const container = document.getElementById('stock-marquee-container');

const marquee = new Marquee(container);
marquee.render();

const stockFiles = ["stocks", "stocks2", "stocks3", "stocks4"];

async function loadCompany() {

  const urlParams = new URLSearchParams(window.location.search);
  const symbol = urlParams.get("symbol");

  if (!symbol) {
    showMessage("No company symbol specified.");
    return;
  }

  try {
    let company = null;

    for (const file of stockFiles) {
      const stocks = await getStockMock(file);
      company = stocks.find(item => item.symbol.toUpperCase() === symbol.toUpperCase());
      if (company) break;
    }
    if (!company) {
      showMessage(`Company "${symbol}" not found.`);
      return;
    }

    showCompanyDetails(company);
  } catch (err) {
    showMessage("Error loading data.");
    console.error(err);
  }
}

loadCompany();
