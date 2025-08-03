export async function getStockMock(symbol) {
  try {
    const response = await fetch("mock/profile_" + symbol + ".json");
    if (!response.ok) {
      throw new Error("File not found");
    }
    const data = await response.json();
    return data.slice(0, 10);
  } catch (err) {
    console.error("Error loading mock data:", err);
    return [];
  }
}
