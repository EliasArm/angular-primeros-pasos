import { Injectable } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  characters: Character[] = [{
    id: uuidv4(),
    name: 'Goku',
    power: 9500
  }, {
    id: uuidv4(),
    name: 'Vegetta',
    power: 9400
  }, {
    id: uuidv4(),
    name: 'Gohan',
    power: 9000
  }, {
    id: uuidv4(),
    name: 'Piccoro',
    power: 8500
  }]

  deleteCharacter(id: string):void{
    this.characters = this.characters.filter(character => character.id !== id)
  }

  newCharacter(character: Character): void{
    const newCharacter: Character = {id: uuidv4(), ...character};
    this.characters.push(newCharacter);
  }
}
