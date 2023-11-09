import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class DbzMainPageComponent {
  constructor(private dbzService: DbzService) { }

  get characterList(): Character[]{
    return [...this.dbzService.characters]
  }

  deleteCharacter(id: string){
    this.dbzService.deleteCharacter(id);
  }

  newCharacter(character: Character){
    this.dbzService.newCharacter(character);
  }

}
