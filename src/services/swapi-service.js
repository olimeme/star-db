export default class SwapiService {
  api = "https://swapi.dev/api";

  async getRequest(url) {
    const res = await fetch(`${this.api}${url}`);
    if (!res.ok) throw new Error("Could not receive the message");
    return await res.json();
  }

  async getAllPeople() {
    const people = await this.getRequest(`/people/`);
    return people.results.map(this._transformPerson);
  }

  async getPersonById(id) {
    const person = await this.getRequest(`/people/${id}/`);
    return this._transformPerson(person);
  }

  async getAllPlanets() {
    const planet = await this.getRequest(`/planets/`);
    return planet.results.map(this._transformPlanet);
  }

  async getPlanetById(id) {
    const planet = await this.getRequest(`/planets/${id}/`);
    return this._transformPlanet(planet);
  }

  async getAllStarships() {
    const starship = await this.getRequest(`/starships/`);
    return starship.results.map(this._transformStarhip);
  }

  async getStarshipById(id) {
    const starship = await this.getRequest(`/starships/${id}`);
    return this._transformStarhip(starship);
  }

  _extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  };

  _transformPlanet = (planet) => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
    };
  };

  _transformStarhip = (starship) => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity,
    };
  };

  _transformPerson = (person) => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
    };
  };
}
