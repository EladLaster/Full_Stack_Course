export class Marquee {
  constructor(containerElement) {
    this.container = containerElement;
    this.marquee = null;
  }

  async loadStocks() {
    try {
      const response = await fetch('./mock/profile_stocks.json'); 
      if (!response.ok) throw new Error('Failed to load stocks data');
      const data = await response.json();
      return data.slice(0, 5);
    } catch (err) {
      console.error(err);
      return [];
    }
  }

  createMarqueeItem(stock) {
    const item = document.createElement('span');
    item.className = 'marquee-item';
    item.textContent = `${stock.companyName} (${stock.symbol}) - $${stock.price}`;
    return item;
  }

  async render() {
    if (!this.marquee) {
      this.marquee = document.createElement('div');
      this.marquee.id = 'stock-marquee';
      this.container.appendChild(this.marquee);
    }

    const stocks = await this.loadStocks();

    this.marquee.innerHTML = '';

    stocks.forEach(stock => {
      const item = this.createMarqueeItem(stock);
      this.marquee.appendChild(item);
    });
  }
}
