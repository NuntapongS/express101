import { DB as prisma } from "../config/db";
import { User } from "../generate/client";

class UserServices {
  create = async (user: User) => prisma.client.user.create({ data: user });
  getUsers = async () => prisma.client.user.findMany();
}

export { UserServices };
