import { PrismaClient } from "../generate/client";

class DB {
  static client: PrismaClient;

  static initPrismaClient() {
    if (!DB.client) {
      DB.client = new PrismaClient();
    }
  }
}

export { DB };
