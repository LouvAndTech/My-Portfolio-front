import { Component, OnInit } from '@angular/core';

import PocketBase from 'pocketbase';
const client = new PocketBase('https://pocket.elouan-lerissel.fr');

@Component({
  selector: 'app-studies-list',
  templateUrl: './studies-list.component.html',
  styleUrls: ['./studies-list.component.scss']
})
export class StudiesListComponent implements OnInit {
  lst_st: any;

  constructor() { }

  ngOnInit(): void {
    this.getStudies();
  }

  async getStudies() {
    const res = await client.records.getList('studies', 1, 4, {
      sort: '-start',
    })
    this.lst_st = res.items;
    this.lst_st.forEach((st: { start: string | number | Date; end: string | number | Date; date: string; }) => {
        st.start = new Date(st.start).getUTCFullYear();
        var year = new Date(st.end).getUTCFullYear()
        if (!year) {
            st.end = "En cours";
        }else {
            st.end = year;
        }
        st.date = st.start + " - "+ st.end;
    });
    //await console.log(this.lst_st);
  }


}
