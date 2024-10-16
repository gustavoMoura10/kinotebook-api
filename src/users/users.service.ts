import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [];
  async getUsers() {
    try {
      return this.users;
    } catch (error) {
      console.log(error);
    }
  }
  async createUser(user) {
    this.users.push(user);
    return user;
  }
  async updateUser(id, user) {
    const index = this.users.findIndex((u) => u.id === id);
    if (index >= 0) {
      this.users[index] = user;
      return user;
    }
  }
  async deleteUser(id) {
    const index = this.users.findIndex((u) => u.id === id);
    if (index >= 0) {
      this.users.splice(index, 1);
      return null;
    }
  }
}
