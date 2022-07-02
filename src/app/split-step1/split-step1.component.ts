import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-split-step1',
  templateUrl: './split-step1.component.html',
  styleUrls: ['./split-step1.component.css']
})
export class SplitStep1Component implements OnInit {

  height : any= "Slide me";
  weight : any = "Slide me";


 constructor() { }

 ngOnInit(
  

 ): void {
 }

 
 HeightChanged(e : any ) {
   this.height = e.target.value + ' cm'
 }


 WeightChanged(e : any ) {
   this.weight = e.target.value + ' Kg'
 }


}

