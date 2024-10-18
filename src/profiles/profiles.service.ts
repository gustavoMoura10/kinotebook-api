import { Injectable } from '@nestjs/common';

@Injectable()
export class ProfilesService {
  private Profiles = [];
  async getProfiles() {
    try {
      return this.Profiles;
    } catch (error) {
      console.log(error);
    }
  }
  async createPerson(person) {
    this.Profiles.push(person);
    return person;
  }
  async updatePerson(id, person) {
    const index = this.Profiles.findIndex((u) => u.id === id);
    if (index >= 0) {
      this.Profiles[index] = person;
      return person;
    }
  }
  async deletePerson(id) {
    const index = this.Profiles.findIndex((u) => u.id === id);
    if (index >= 0) {
      this.Profiles.splice(index, 1);
      return null;
    }
  }
}
