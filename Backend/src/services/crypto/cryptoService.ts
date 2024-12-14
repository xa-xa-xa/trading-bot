// // coinbaseService.ts
// import "dotenv/config";

// // Use require since the SDK might not have proper ES exports for TS
// // @ts-ignore to silence type errors if needed
// const { Client } = require("@coinbase/coinbase-sdk");

// const API_KEY = process.env.COINBASE_API_KEY_NAME;
// const API_SECRET = process.env.COINBASE_API_PRIVATE_KEY;

// if (!API_KEY || !API_SECRET) {
//   throw new Error("Missing Coinbase API credentials");
// }

// const client = new Client({
//   apiKey: API_KEY,
//   apiSecret: API_SECRET,
//   strictSSL: false,
// });

// export async function getCoinbaseAccounts(): Promise<any[]> {
//   try {
//     const accounts = await client.getAccounts();
//     return accounts;
//   } catch (error) {
//     console.error("Error fetching Coinbase accounts:", error);
//     throw new Error("Unable to fetch Coinbase accounts");
//   }
// }

// export async function getBitcoinPrice(): Promise<string> {
//   try {
//     const price = await client.getSpotPrice({ currency: "USD" });
//     return price.data.amount;
//   } catch (error) {
//     console.error("Error fetching BTC price:", error);
//     throw new Error("Unable to fetch BTC price");
//   }
// }

// export async function getTransactionsForFirstAccount(): Promise<any[]> {
//   try {
//     const accounts = await client.getAccounts();
//     if (!accounts || accounts.length === 0) {
//       console.log("No Coinbase accounts available.");
//       return [];
//     }
//     const firstAccountId = accounts[0].id;
//     const transactions = await client.getTransactions(firstAccountId);
//     return transactions;
//   } catch (error) {
//     console.error("Error fetching Coinbase transactions:", error);
//     throw new Error("Unable to fetch Coinbase transactions");
//   }
// }
