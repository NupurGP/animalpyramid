import { Animal } from '../animal.model';

export class PyramidRow {
  animals: Animal[];
  level: number;

  constructor(animals: Animal[], level: number) {
    this.animals = animals;
    this.level = level;
  }
}
