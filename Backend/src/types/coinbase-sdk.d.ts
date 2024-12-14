declare module "@coinbase/coinbase-sdk" {
  interface ClientOptions {
    apiKey: string;
    apiSecret: string;
    strictSSL?: boolean;
  }

  interface SpotPriceResponse {
    data: {
      amount: string;
      currency: string;
    };
  }

  class Client {
    constructor(options: ClientOptions);
    getAccounts(): Promise<any[]>;
    getSpotPrice(params: { currency: string }): Promise<SpotPriceResponse>;
    getTransactions(accountId: string): Promise<any[]>;
  }

  export { Client };
}
