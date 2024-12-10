import express, { Request, Response } from "express";
require("dotenv").config();

const app = express();
const port = 3000;

app.get("/", async (req: Request, res: Response) => {
  res.send("Hello world!");
});

app.get("/data", async (req, res) => {
  const apiUrl = process.env.PAPER_ENDPOINT;
  const keyId = process.env.PAPER_APCA_API_KEY_ID;
  const secretKey = process.env.PAPER_APCA_API_SECRET_KEY;

  if (!apiUrl) throw new Error("Error: no apiUrl");
  if (!keyId) throw new Error("Error: no keyId");
  if (!secretKey) throw new Error("Error: no secretKey");

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "accept": "application/json",
        "APCA-API-KEY-ID": keyId,
        "APCA-API-SECRET-KEY": secretKey,
      },
    });

    if (!response.ok) {
      throw new Error(`Response error: ${response.statusText}: ${response}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    const errorText = "Response error. Failed to fetch data";
    console.error(errorText, error);
    res.status(500).json({ error: errorText });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
