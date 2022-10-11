import { User } from "../generate/client";

class UserModel {
  constructor(private instance: User) {}

  get toJSON() {
    return {
      id: this.instance.id,
      firstName: this.instance.firstName,
      lastName: this.instance.lastName,
      email: this.instance.email,
      createdAt: this.instance.createdAt,
      updatedAt: this.instance.updatedAt,
    };
  }
}

export default UserModel;
