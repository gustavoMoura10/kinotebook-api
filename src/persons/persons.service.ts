import { Injectable } from '@nestjs/common';

@Injectable()
export class PersonsService {
  private persons = [];
  async getPersons() {
    try {
      return this.persons;
    } catch (error) {
      console.log(error);
    }
  }
  async createPerson(person) {
    this.persons.push(person);
    return person;
  }
  async updatePerson(id, person) {
    const index = this.persons.findIndex((u) => u.id === id);
    if (index >= 0) {
      this.persons[index] = person;
      return person;
    }
  }
  async deletePerson(id) {
    const index = this.persons.findIndex((u) => u.id === id);
    if (index >= 0) {
      this.persons.splice(index, 1);
      return null;
    }
  }
}
