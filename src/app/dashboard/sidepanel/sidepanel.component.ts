import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidepanel',
  templateUrl: './sidepanel.component.html',
  styleUrls: ['./sidepanel.component.css']
})
export class SidepanelComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  handleLogout() {
    this.authService.logOutUser();
  }



}
