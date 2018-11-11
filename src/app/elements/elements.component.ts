import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'swf-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.css']
})
export class ElementsComponent implements OnInit {
  val: number;
  step: number;
  min: number;
  max: number;


  ngOnInit() {
  }
}
