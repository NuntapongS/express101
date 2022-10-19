import { DB as prisma } from "../config/db";
import { User } from "../generate/client";

class UserServices {
  create = async (user: User) => prisma.client.user.create({ data: user });
  getUsers = async () => prisma.client.user.findMany();
  getUserByID = async (id: number) => {
    const rs = await prisma.client.user.findUnique({ where: { id } });
    if (!rs) {
      throw new Error(`User with id ${id}} not found`);
    }
    return rs;
  };
  updateUser = async (id: number, user: User) => {
    const rs = await prisma.client.user.update({ where: { id }, data: user });
    if (!rs) {
      throw new Error(`User with id ${id}} not found`);
    }
    return rs;
  };
  deleteUser = async (id: number) => {
    const rs = await prisma.client.user.delete({ where: { id } });
    if (!rs) {
      throw new Error(`User with id ${id}} not found`);
    }
    return rs;
  };
}

export { UserServices };
