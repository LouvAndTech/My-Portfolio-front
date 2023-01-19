import { Component, OnInit } from '@angular/core';

import { pb } from 'src/main';

@Component({
  selector: 'app-github-embeded',
  templateUrl: './github-embeded.component.html',
  styleUrls: ['./github-embeded.component.scss']
})
export class GithubEmbededComponent implements OnInit {
  lst_projet : any;
  actualPage : number = 1;
  maxPage : number = 1;

  buttonLeftState : string = 'disabled' || 'active';
  buttonRightState : string = 'active' || 'disabled';
  

  constructor() { }

  ngOnInit(): void {
    this.getProject(this.actualPage);
  }

  async getProject(start :number = 1, end :number = 3) {
    const res = await pb.records.getList('github_projects', start, end, {
      sort: '-created',
    })
    this.maxPage = res.totalPages;
    this.lst_projet = res.items;
  }

  next(){
    if(this.actualPage < this.maxPage){
      this.actualPage++;
      this.getProject(this.actualPage,3);
    }
    this.buttonsCheck();
  }
  previous(){
    if (this.actualPage > 1) {
      this.actualPage--;
      this.getProject(this.actualPage,3);
    }
    this.buttonsCheck();
  }

  buttonsCheck(){
    if(this.actualPage == 1){
      this.buttonLeftState = 'disabled';
    }else{
      this.buttonLeftState = 'active';
    }
    if(this.actualPage == this.maxPage){
      this.buttonRightState = 'disabled';
    }else{
      this.buttonRightState = 'active';
    }
  }

}
