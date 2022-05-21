import { Component, OnInit, Input } from '@angular/core';
import * as bootstrap from "bootstrap";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() id:number = 0;
  @Input() categoryTitle: string = "";
  @Input() description: string = "";

  
  constructor() { }

  ngOnInit(): void {
  }

  openModal(id: number, title: string, element: any) {
    let modal = new bootstrap.Modal(element);
    modal.show();
  }
  

}
