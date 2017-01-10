// our root app component
import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-eventbinding',
  templateUrl: 'eventbinding.component.html',
  styleUrls: ['eventbinding.component.css']
})
export class EventBindingComponent {
  imagePath = 'images/angular.png';
  messages: string[] = [];
  title: string;

  constructor() {
    this.title = 'Angular 2 Binding Events';
  }

  log(msg: string, data: string) {
    this.messages.splice(0, 0, msg);
    console.log(msg);
    if (data) {
      console.log(data);
    }
  }
}