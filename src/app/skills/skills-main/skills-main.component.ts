import { Component, OnInit } from '@angular/core';

import PocketBase from 'pocketbase';
import { AppComponent } from 'src/app/app.component';
const client = new PocketBase(AppComponent.API_ENDPOINT);


@Component({
  selector: 'app-skills-main',
  templateUrl: './skills-main.component.html',
  styleUrls: ['./skills-main.component.scss']
})
export class SkillsMainComponent implements OnInit {
  lst_lang : any;
  lang_hover!: string;
  constructor() { }

  ngOnInit(): void {
    this.getLang();
  }

  changeLangHover(lang: string) {
    this.lang_hover = lang;
    //console.log("got it ! : "+this.lang_hover);
    //do Something 
    //todo 
  }

  async getLang() {
    const res = await client.records.getList('languages', 1, 8, {
    })
    this.lst_lang = res.items;
    this.lang_hover = this.lst_lang[0].name;
  }

}
