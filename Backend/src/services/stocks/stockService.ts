import Alpaca from "@alpacahq/alpaca-trade-api";

const alpaca = new Alpaca({
  keyId: process.env.ALPACA_PAPER_API_KEY_ID,
  secretKey: process.env.ALPACA_PAPER_API_SECRET_KEY,
  paper: true,
});

export async function fetchStockTrade(symbol: string): Promise<any> {
  try {
    const latestTrade = await alpaca.getLatestTrade(symbol);
    return latestTrade;
  } catch (error) {
    console.error("Error fetching stock trade:", error);
    throw error;
  }
}

export async function placeStockOrder(
  symbol: string,
  qty: number,
  side: "buy" | "sell",
): Promise<any> {
  try {
    const order = await alpaca.createOrder({
      symbol,
      qty,
      side,
      type: "market",
      time_in_force: "day",
    });

    return order;
  } catch (error) {
    console.error("Error placing stock order:", error);
  }
}
