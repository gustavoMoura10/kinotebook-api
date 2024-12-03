import { Injectable } from '@nestjs/common';

@Injectable()
export class ProfilesService {
  async getProfiles() {
    return `This action returns all profiles`;
  }
  async createPerson(person) {
    return `This action adds a new person`;
  }
  async updatePerson(id, person) {
    return `This action updates a #${id} person`;
  }
  async deletePerson(id) {
    return `This action removes a #${id} person`;
  }
}
