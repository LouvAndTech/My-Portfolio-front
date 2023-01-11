import { Component, OnInit } from '@angular/core';
import { pb } from 'src/main';

@Component({
  selector: 'app-expriences-list',
  templateUrl: './expriences-list.component.html',
  styleUrls: ['./expriences-list.component.scss']
})
export class ExpriencesListComponent implements OnInit {
  lst_st: any;
  lst_st_active : any;
  max : number = 4;
  pos: number = 4;

  constructor() { }

  ngOnInit(): void {
    this.getStudies();
  }

  async getStudies() {
    const res = await pb.records.getList('experience_professionel', 1, 4, {
      sort: '-start',
    })
    this.lst_st = res.items;
    this.lst_st.forEach((st: { start: string | number | Date; end: string | number | Date; date: string; }) => {
        st = formatDate(st);
    });
    this.lst_st_active = this.lst_st.slice(0, 4);
    //await console.log(this.lst_st);
  }

  next() {
    this.pos += 1;
    this.updateActive();
  }
  previous(){
    if (this.pos > 4) {
      this.pos -= 1;
      this.updateActive();
    }
  }

  async updateActive() {
    if (this.pos <= this.lst_st.length) {
      this.lst_st_active = this.lst_st.slice(this.pos-4, this.pos);
    }else{
      if(! await this.getMore()){
        this.pos -= 1;
      }else{
        this.lst_st_active = this.lst_st.slice(this.pos-4, this.pos);
        console.log(this.lst_st_active);
      }
    }
  }

  async getMore(){
    const res = await pb.records.getList('experience_professionel', this.pos, 1, {
      sort: '-start',
    });
    if (res.items[0]['name'] == this.lst_st[this.lst_st.length-1].name){
      return false;
    }
    this.lst_st.push(res.items[0]);
    this.lst_st[this.lst_st.length-1] = formatDate(this.lst_st[this.lst_st.length-1]);
    return true;
  }
}

function formatDate(st: { start: string | number | Date; end: string | number | Date; date: string; }){
  st.start = new Date(st.start).getUTCFullYear();
  var year = new Date(st.end).getUTCFullYear()
  if (!year) {
      st.end = "En cours";
  }else {
      st.end = year;
  }
  st.date = st.start + " - "+ st.end;
  return st;
}
