import express, { Request, Response } from "express";
import { fetchStockTrade } from "./services/stocks/stockService";
require("dotenv").config();

const app = express();
const port = 4000;

//ALPACA
const alpacaPaperApiEndpoint = process.env.PAPER_ENDPOINT;
const alpacaPaperApiKeyId = process.env.PAPER_APCA_API_KEY_ID;
const alpacaPaperSecretKey = process.env.PAPER_APCA_API_SECRET_KEY;

app.get("/", async (req: Request, res: Response) => {
  res.send("Hello world!");
});

app.get("/alpaca/test", async (req, res) => {
  if (!alpacaPaperApiEndpoint)
    throw new Error("Error: no alpacaPaperApiEndpoint");
  if (!alpacaPaperApiKeyId) throw new Error("Error: no alpacaPaperApiKeyId");
  if (!alpacaPaperSecretKey) throw new Error("Error: no alpacaPaperSecretKey");
  if (!alpacaPaperApiKeyId) throw new Error("Error: no alpacaPaperApiKeyId");

  try {
    const options = {
      method: "GET",
      headers: {
        "accept": "application/json",
        "APCA-API-KEY-ID": alpacaPaperApiKeyId,
        "APCA-API-SECRET-KEY": alpacaPaperSecretKey,
      },
    };
    const response = await fetch(alpacaPaperApiEndpoint, options);

    if (!response.ok) {
      throw new Error(`Response error: ${response.statusText}: ${response}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    const errorText = "Response error. Failed to fetch data";

    console.error(`${errorText}:`, error);
    res.status(500).json({ error: errorText });
  }
});

app.get("/stock/:symbol", async (req: Request, res: Response) => {
  const { symbol } = req.params;
  const trade = await fetchStockTrade(symbol);

  res.json(trade);
  try {
  } catch (error) {
    const errorText = `Error fetching stock "${symbol}" data`;
    console.error(`${errorText}:`, error);
    res.status(500).json({ error: errorText });
  }
});

// COINBASE
// Coinbase endpoints

//
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
