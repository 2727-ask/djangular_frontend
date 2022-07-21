import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  show1: boolean = false;
  show2: boolean = false;
  info = new FormGroup({
    newPassword: new FormControl(''),
    confirmPassword: new FormControl(''),

  },
    { validators: this.passwordMatch('newPassword', 'confirmPassword') }
  )
  constructor(private authService: AuthService, private router: Router, private toastrService: ToastrService) { }


  ngOnInit(): void {
  }

  password1() {
    this.show1 = !this.show1;
  }
  password2() {
    this.show2 = !this.show2;
  }
  passwordMatch(password: string, confirmPassword: string): ValidatorFn {
    return (formGroup: AbstractControl): { [key: string]: any } | null => {
      const passwordControl = formGroup.get(password);
      const confirmPasswordControl = formGroup.get(confirmPassword);

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if (
        confirmPasswordControl.errors &&
        !confirmPasswordControl.errors
      ) {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
        return { passwordMismatch: true }
      } else {
        confirmPasswordControl.setErrors(null);
        return null;
      }
    };
  }

  resetPass(form: FormGroup) {
    console.log(form);
    if (form.valid) {
      this.router.navigate(['/auth']);
      this.toastrService.success("Password Updated Successfully");

    } else {
      console.log("Error");
    }
  }






}
