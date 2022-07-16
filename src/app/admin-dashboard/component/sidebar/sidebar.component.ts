import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private authService:AuthService) { }

  isActive:number = 0;
  ngOnInit(): void {
  }

  makeActive(id:number){
    this.isActive = id;
  }

  handleLogout(){
    this.authService.logOutUser();
  }

}
