import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-binding',
  templateUrl: 'binding.component.html',
})
export class BindingComponent {
  title = 'Angular 2 Two-Way Binding';
  story = {
    name: 'The Empire Strikes Back'
  };
  changeName(){
      this.story.name = 'Jedi Rules ' + Math.random();
  }
}