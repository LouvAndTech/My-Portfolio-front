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
  usage : string = "";
  mastering : string = "";

  ngOnChanges() {
    this.lang_hover = this.displayLang(this.lang_hover);
  }

  displayLang(lang : string) : string{
    for (let i = 0; i < this.lst_lang.length; i++) {
      if(this.lst_lang[i].name == lang){
        this.name = this.lst_lang[i].name;
        this.usage = this.lst_lang[i].usages;
        this.mastering = this.lst_lang[i].level;
        break;
      }
    }
    return this.name;
  }
}

