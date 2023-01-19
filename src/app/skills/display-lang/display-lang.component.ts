import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-display-lang',
  templateUrl: './display-lang.component.html',
  styleUrls: ['./display-lang.component.scss']
})
export class DisplayLangComponent implements OnChanges {
  @Input() lang_hover!: string;
  @Input() lst_lang!: any;

  name : string = "";
  mastering : string = "";
  usage : string [] = [];

  ngOnChanges() {
    this.lang_hover = this.displayLang(this.lang_hover);
  }

  displayLang(lang : string) : string{
    if (!this.lst_lang) {
      return "";
    }
    for (let i = 0; i < this.lst_lang.length; i++) {
      if(this.lst_lang[i].name == lang){
        this.name = this.lst_lang[i].name;
        this.usage = [];
        try{
          for (let usage of this.lst_lang[i].usages) {
            this.usage.push(`${usage}`);
            //console.log(this.usage);
          } 
        }catch(e){
          //console.log(e);
        }
        this.mastering = this.lst_lang[i].level;
        break;
      }
    }
    return this.name;
  }
}

