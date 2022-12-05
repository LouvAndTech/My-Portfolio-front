import { Component, OnInit } from '@angular/core';
import PocketBase from 'pocketbase';

import { AppComponent } from 'src/app/app.component';
const client = new PocketBase(AppComponent.API_ENDPOINT);

@Component({
  selector: 'app-github-embeded',
  templateUrl: './github-embeded.component.html',
  styleUrls: ['./github-embeded.component.scss']
})
export class GithubEmbededComponent implements OnInit {
  lst_projet : any;
  

  constructor() { }

  ngOnInit(): void {
    this.getProject();
  }

  async getProject(start :number = 1, end :number = 3) {
    const res = await client.records.getList('github_projects', start, end, {
    })
    this.lst_projet = res.items;
    console.log(this.lst_projet);
  }

}
