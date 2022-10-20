import cookieParser from "cookie-parser";
import cors from "cors";
import express, {
  json,
  NextFunction,
  Request,
  Response,
  urlencoded,
} from "express";
import { mwLogger } from "./logger";
import { appRoutes } from "./routes/app.routes";

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

  app.use(mwLogger);

  app.get("/api/health", (_, res: Response) => {
    res.status(200).json({ message: "OK" });
  });

  app.use("/api", appRoutes);

  app.use((error: unknown, _: Request, res: Response, __: NextFunction) =>
    res.status(500).json({
      status_code: 500,
      message: (error as Error).message,
    })
  );

  return app;
};

export { main };
