import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.css']
})
export class DisplayCardComponent implements OnInit {

  @Input() icon:string = "";
  @Input() title:string = "";
  @Input() bg_color:string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
