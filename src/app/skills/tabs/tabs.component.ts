import { Component, OnInit } from '@angular/core';
import { pb } from 'src/main';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  skills :{
    active:boolean,
    name:string,
    subtitle:string,
    field:string,
    tags:string[],
  }[] = [{active:true,name:"",subtitle:"",field:"",tags:[""]}];
  activeTab = 0;

  constructor() {
    
  }
  ngOnInit(): void {
    this.getSkills(10);
  }
  
  async getSkills(mx:number){
    const res = await pb.records.getList('skills', 1, mx, {
      sort: '-created',
    })
    this.skills = [];
    res.items.forEach((skill:any) => {
      this.skills.push({
        active:false,
        name:skill.name,
        subtitle:skill.subtitle,
        field:skill.content,
        tags:skill.tags
      });
    });
    this.setActiveTab(this.skills[0]);
  }

  setActiveTab(tab:any){
    this.activeTab = this.skills.indexOf(tab);
    this.skills.forEach((skill:any) => {
      skill.active = false;
    });
    this.skills[this.activeTab].active = true;
  }


}