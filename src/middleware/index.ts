import { NextFunction, Request, Response } from "express";

export const verifyAPIKey =
  () => (req: Request, res: Response, next: NextFunction) => {
    // my-api-key-public@
    const apiKeyEncoded = Buffer.from(
      process.env.API_KEY_PUBLIC ?? ""
    ).toString("base64");
    const apiKeyHeader = req.header("X-API-KEY");
    console.log(apiKeyEncoded);

    next(
      !apiKeyHeader
        ? new Error("Missing API Key")
        : apiKeyEncoded !== apiKeyEncoded && new Error("API Key not correct")
    );
  };
