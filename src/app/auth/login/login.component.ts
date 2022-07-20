import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  info = new FormGroup({
    name: new FormControl(''),
    password: new FormControl('')
  })

  handleLogin(form: FormGroup) {
    console.log(form.value);

    if (this.info.valid) {
      this.authService.loginUser(form.value.name, form.value.password).subscribe((val: any) => {
        console.log("token", val.token);
        if (val.token.length > 10) {
          localStorage.setItem('token', val.token); this.router.navigate(['/dashboard']);
        };
      })
    }
  }





}
