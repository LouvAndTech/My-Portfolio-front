import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-text',
  template: `
    <div>
      {{ text }}
      <span class="{{(blink)?'on':'off'}}">|</span></div>
  `,
  styles: [`
  span{
    letter-spacing: 0rem;
  }
  .on{
    visibility: visible;
    opacity: 1;
  }
  .off{
    visibility: hidden;
    opacity: 0;
  }
  `]
})
export class IntroTextComponent implements OnInit {

  text = "";
  txt_to_print = 'I\'m a second year student in electronic and computing engenering';
  iterator : number = 0;
  st : string = "write";
  st_last : string = "";

  blink : boolean = true;
  constructor() { 
    setInterval(()=>{
      this.writeText();
    }, (Math.floor(Math.random() * 70) + 50));
  }

  ngOnInit(): void {
      
  }

  writeText() : void {
    if (this.st == "write") {
      if(this.iterator < this.txt_to_print.length){
        this.text += this.txt_to_print.charAt(this.iterator);
        this.iterator++;
      }else {
        this.st = "wait";
        this.st_last = "write";
        this.iterator = 0;
      }
    }else if (this.st == "wait") {
      if(this.iterator < 30){
        this.iterator++;
        if (this.iterator % 4 == 0) {
          this.blink = !this.blink;
        }
      }else {
        if (this.st_last == "write"){
          this.st = "erase";
        }else if (this.st_last == "erase"){
          this.st = "write";
        }
        this.blink = true;
        this.st_last = "wait";
        this.iterator = 0;
      }
    }else if(this.st == "erase") {
      if (this.text.length > 0) {
        this.text = this.text.slice(0, -2);
      }else {
        this.st = "wait";
        this.st_last = "erase";
        this.iterator = 0;
      }
    }
  }
}
