import { Component, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/dbz.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  character: Character = {
    name:'',
    power: 0
  }

  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  addCharacter():void{
    if ( this.character.name.length === 0 ) return;
    console.log(this.character)
    this.onNewCharacter.emit(this.character);
    this.character = {name: '', power: 0};
  }

}
