import { Component } from '@angular/core';

@Component({
  selector: 'app-background',
  template: `
    <img src="/assets/img/gif/{{randomBackground}}.gif">
  `,
  styles: [`img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: fixed;
    z-index: -1;
    }`]
})
export class BackgroundComponent {

  constructor() { }

  randomBackground = Math.floor(Math.random() * 5)+1;

}
