import cookieParser from "cookie-parser";
import cors from "cors";
import express, { json, Response, urlencoded } from "express";

const main = () => {
  const app = express();
  app.use(cookieParser());
  app.use(urlencoded({ extended: true }));
  app.use(json());

  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );

  app.get("/api/health", (_, res: Response) => {
    res.status(200).json({ message: "OK" });
  });

  return app;
};

export { main };
