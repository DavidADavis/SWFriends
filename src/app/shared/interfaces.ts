
export interface IPeople {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: Date;
    edited: Date;
    url: string;
}

export interface IPlanets {
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
    residents: any[];
    films: string[];
    created: Date;
    edited: Date;
    url: string;
}

export interface IStarships {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    max_atmosphering_speed: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    consumables: string;
    hyperdrive_rating: string;
    MGLT: string;
    starship_class: string;
    pilots: any[];
    films: string[];
    created: Date;
    edited: Date;
    url: string;
}

export interface IFilms {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    characters: string[];
    planets: string[];
    starships: string[];
    vehicles: string[];
    species: string[];
    created: Date;
    edited: Date;
    url: string;
}

export interface ISpecies {
    name: string;
    classification: string;
    designation: string;
    average_height: string;
    skin_colors: string;
    hair_colors: string;
    eye_colors: string;
    average_lifespan: string;
    homeworld: string;
    language: string;
    people: string[];
    films: string[];
    created: Date;
    edited: Date;
    url: string;
}

export interface IVehicles {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    max_atmosphering_speed: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    consumables: string;
    vehicle_class: string;
    pilots: string[];
    films: string[];
    created: Date;
    edited: Date;
    url: string;
    bob: string;
}

export interface ISWAPIResult<T> {
    count: number;
    next: string;
    previous?: any;
    results: T;
}


// "people": "https://swapi.co/api/people/",
// "planets": "https://swapi.co/api/planets/",
// "films": "https://swapi.co/api/films/",
// "species": "https://swapi.co/api/species/",
// "vehicles": "https://swapi.co/api/vehicles/",
// "starships": "https://swapi.co/api/starships/"
