import { Component } from '@angular/core';

@Component({
  selector: 'app-intro-text',
  template: `
    <p>
      {{ text }}
    </p>
  `,
  styles: [
    
  ]
})
export class IntroTextComponent{

  text = "";
  txt_to_print = 'I\'m a first year student in electronic and computing engenering';
  it = 0;
  constructor() { 
    let int = setInterval(() => {
      if(this.it < this.txt_to_print.length){
        this.text += this.txt_to_print.charAt(this.it);
      }else {
        clearInterval(int);
      }
      this.it ++;
      }
      ,  Math.floor(Math.random() * 70) + 50)
  }
}
