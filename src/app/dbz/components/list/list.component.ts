import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/dbz.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  characterList: Character[] = [{
    name: 'Bulma',
    power: 10
  }]

  @Output()
  onDeleteCharacter: EventEmitter<string> = new EventEmitter();

  deleteCharacter(id?:string){
    if ( !id ) return;
    console.log({id});
    this.onDeleteCharacter.emit(id);
  }

}
