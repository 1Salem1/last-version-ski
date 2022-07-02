import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ski-step1',
  templateUrl: './ski-step1.component.html',
  styleUrls: ['./ski-step1.component.scss']
})
export class SkiStep1Component implements OnInit {

   height : any = "Slide me";
   weight : any = "Slide me";


  constructor() { }

  ngOnInit(
   

  ): void {
  }

  
  HeightChanged(e : any ) {
    this.height = e.target.value +" cm"
  }


  WeightChanged(e : any ) {
    this.weight = e.target.value + "Kg"
  }


}
