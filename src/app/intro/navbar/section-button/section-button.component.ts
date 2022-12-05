import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-button',
  template: `
    <li (click)="scrollToTarget()">
      <a>{{text}}</a>
    </li>
  `,
  styleUrls: ['./section-button.component.scss']
})
export class SectionButtonComponent {
  @Input () target!: string;
  @Input () text!: string;

  scrollToTarget() {
    let target = document.getElementById(this.target);
    console.log(target);
    if(target) {
      target.scrollIntoView({behavior: 'smooth'});
    }
  }
}

