export default class SwapiService {
  constructor(url) {
    this.api = url;
  }

  async getRequest(url) {
    const res = await fetch(`${this.api}${url}`);
    if (!res.ok) throw new Error("Could not receive the message");
    return await res.json();
  }

  async getAllPeople() {
    return this.getRequest(`/people/`);
  }

  async getPersonById(id) {
    return this.getRequest(`/people/${id}`);
  }

  async getAllPlanets() {
    return this.getRequest(`/planets/`);
  }

  async getPlanetById(id) {
    return this.getRequest(`/planets/${id}`);
  }

  async getAllStarships() {
    return this.getRequest(`/starships/`);
  }

  async getStarshipById(id) {
    return this.getRequest(`/starships/${id}`);
  }
}
