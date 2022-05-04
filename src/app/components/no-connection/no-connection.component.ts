import { Component, OnInit } from '@angular/core';
import { HttpClient }    from '@angular/common/http';

@Component({
  selector: 'app-no-connection',
  templateUrl: './no-connection.component.html',
  styleUrls: ['./no-connection.component.css']
})
export class NoConnectionComponent implements OnInit {

  isConnectionAvailable: boolean = navigator.onLine; 

  constructor(private httpClient: HttpClient) { 
      window.addEventListener('online', () => {
        this.isConnectionAvailable = true
    });

    window.addEventListener('offline', () => {
        this.isConnectionAvailable = false
    });
  }

  ngOnInit(): void {
  }

}
