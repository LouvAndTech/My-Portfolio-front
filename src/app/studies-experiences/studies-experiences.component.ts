import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { pb } from 'src/main';

@Component({
  selector: 'app-studies-experiences-main',
  templateUrl: './studies-experiences.component.html',
  styleUrls: ['./studies-experiences.component.scss']
})
export class StudiesExperiencesComponent implements OnInit {
  @ViewChild('box') box: any;
  @ViewChild('svg') svg: any;
  @ViewChild('path') path: any;

  active : number = 0;

  lst_nodes: [number,number][] = [];

  lst_st: any;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    let width = Math.round(this.box.nativeElement.clientWidth/10);
    let height = this.box.nativeElement.clientHeight - 100;

    let path = this.generateSVG(height, width);
    this.svg.nativeElement.setAttribute("width", `${width}`);
    this.svg.nativeElement.setAttribute("height", `${height}`);
    this.svg.nativeElement.setAttribute("viewBox", `0 0 ${width+30} ${height}`);
    this.path.nativeElement.setAttribute("d", path);

    this.generateNodes(height, width);
  }

  generateSVG(height : number, width : number) : string {
    let curveheight = Math.round(height / 6);
    let halfCurve = Math.round(curveheight / 2);
    let svg = `M -10 -10 C -10 ${halfCurve} ${width} ${halfCurve} ${width} ${curveheight} V ${height-curveheight} C ${width} ${height-halfCurve} -10 ${height-halfCurve} -10 ${height}`
    return svg;
  }

  async generateNodes(height : number, width : number) {
    await this.getStudies();
    let startPoint = Math.round(height / 6)+10;
    let space = Math.round((height - startPoint) / (this.lst_st.length));
    for(let i = 0; i < this.lst_st.length; i++) {
      this.lst_nodes.push([width, startPoint + space * i]);
    }
  }

  async getStudies() {
    const res = await pb.records.getList('studies', 1, 4, {
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
    await console.log(this.lst_st);
  }

  onClick(i : number) {
    this.active = i;
  }

}
