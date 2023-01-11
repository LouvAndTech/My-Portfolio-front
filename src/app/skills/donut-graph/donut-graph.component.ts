import { Component, Input, Output, EventEmitter , OnChanges } from '@angular/core';

import {pb} from 'src/main';

@Component({
  selector: 'app-donut-graph',
  template: `
    <div class="donut-container">
      <svg width="400" height="400" viewBox="-200 -200 400 400" preserveAspectRatio="xMidYMid">
        <g class="arcGroup">
          <path (mouseenter) ="mouseEnter(i)" class="arc" *ngFor="let path of listPath; let i = index" [attr.d]="path.d" [attr.transform]="path.rotate" [attr.fill]="lst_lang[i].color" stroke="white" attr.stroke-width="{{active[i]?2:0}}" stroke-linecap="round">
          </path>
        </g>
      </svg>
    </div>
  `,
  styleUrls: ['./donut-graph.component.scss']
})
export class DonutGraphComponent implements OnChanges {
  @Input() lst_lang!: any;
  @Output() langUpdateEvent = new EventEmitter<string>();
  listPath!: {d : string, rotate : string}[];
  active !: boolean [];
  
  ngOnChanges(){
    this.active = new Array(this.lst_lang.length).fill(false);
    this.listPath = buildDonnut(this.lst_lang);
  }

  mouseEnter(index : number) {
    this.active = new Array(this.lst_lang.length).fill(false);
    this.langUpdateEvent.emit(this.lst_lang[index].name);
    this.active[index] = true;
    //console.log("mouseOver: "+lang);
  }
}

function buildDonnut(lst_lang : any) : {d : string, rotate : string}[]{
  var angles = 360 / lst_lang.length;
  var StartAngle = 0;
  var svgPaths: {d : string, rotate : string}[] = [];
  for (let i = 0; i < lst_lang.length; i++) {
    svgPaths.push({d : buidAPart(StartAngle, angles, 199, 110), rotate : 'rotate('+0+')'});
    StartAngle += angles;
  }
 //console.log(svgPaths);
  return svgPaths ;
}

function buidAPart(aStart : number, atotal : number , R : number, r : number) : string {
  var aEnd = (aStart + atotal)-1;
  aStart = aStart + 1;
  //Correction for the section diffrence between the part 
  let corection = 0.3; 
  //compute all the points
  const Pt1 = {x: R * Math.cos(degRad(aStart-corection)), y: R * Math.sin(degRad(aStart-corection))};
  const Pt2 = {x: R * Math.cos(degRad(aEnd+corection)), y: R * Math.sin(degRad(aEnd+corection))};
  const Pt3 = {x: r * Math.cos(degRad(aEnd)), y: r * Math.sin(degRad(aEnd))};
  const Pt4 = {x: r * Math.cos(degRad(aStart)), y: r * Math.sin(degRad(aStart))};

  //if big 180° arc
  var big = 0;
  if (atotal > 180) big = 1;

  //create an array and join it just for code legibility
  var d = "M " + Pt1.x + "," + Pt1.y + // Start
          " A " + R + "," + R + // Arc outer
          " 0 " + big + " 1 " + // Arc details
          Pt2.x + "," + Pt2.y + // End
          " L " + Pt3.x + "," + Pt3.y + // Line
          " A " + r + "," + r + // Arc inner
          " 0 " + big + " 0 " + // Arc details
          Pt4.x + "," + Pt4.y + // End
          " Z"; // Close path
  return d;
}

function degRad(deg : number) : number{
  return deg * (Math.PI/180);
}