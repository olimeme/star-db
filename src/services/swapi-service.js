export default class SwapiService {
  api = "https://swapi.dev/api";

  getRequest = async (url) => {
    const res = await fetch(`${this.api}${url}`);
    if (!res.ok) throw new Error("Could not receive the message");
    return await res.json();
  };

  getAllPeople = async () => {
    const people = await this.getRequest(`/people/`);
    return people.results.map(this._transformPerson);
  };

  getPersonById = async (id) => {
    const person = await this.getRequest(`/people/${id}/`);
    return this._transformPerson(person);
  };

  getAllPlanets = async () => {
    const planet = await this.getRequest(`/planets/`);
    return planet.results.map(this._transformPlanet);
  };

  getPlanetById = async (id) => {
    const planet = await this.getRequest(`/planets/${id}/`);
    return this._transformPlanet(planet);
  };

  getAllStarships = async () => {
    const starship = await this.getRequest(`/starships/`);
    return starship.results.map(this._transformStarship);
  };

  getStarshipById = async (id) => {
    const starship = await this.getRequest(`/starships/${id}`);
    return this._transformStarhip(starship);
  };

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

  _transformStarship = (starship) => {
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
