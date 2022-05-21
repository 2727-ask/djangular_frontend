import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  isActive:number = 0;
  ngOnInit(): void {
  }

  makeActive(id:number){
    this.isActive = id;
  }

}
