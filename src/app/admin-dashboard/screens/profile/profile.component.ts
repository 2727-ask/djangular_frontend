import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Profile } from '../../interfaces/profile';
import { HttpGenericService } from '../../services/http-generic.service';
import { ProfileService } from '../../services/profile.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public profile: FormGroup;
  public loggedInUser: any;
  public profileInfo: any;
  constructor(private authService: AuthService, private profileService: ProfileService, private toastrService: ToastrService) {

  }

  ngOnInit(): void {
    this.initializeForm();
    this.handleGetProfileInfo();
  }

  initializeForm() {
    this.profile = new FormGroup({
      name: new FormControl("", { validators: [Validators.maxLength(50)] }),
      bio: new FormControl("", { validators: [Validators.maxLength(400)] }),
      github: new FormControl("", { validators: [Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')] }),
      social: new FormControl("", { validators: [Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')] }),
      location: new FormControl("", { validators: [Validators.maxLength(50)] }),
    });
  }

  handleUserInfo() {
    (this.profile.value.name) ? this.loggedInUser.username = this.profile.value.name : (this.loggedInUser = this.authService.getLoggedInUserInfo());
    console.log(this.loggedInUser);
  }

  handleGetProfileInfo() {
    this.profileService.getUserProfileInfo().subscribe((res: any) => {
      this.profileInfo = res.data[0];
      console.log(this.profileInfo);
      this.profile.patchValue({ 'name': this.profileInfo.name, 'bio': this.profileInfo.bio, 'github': this.profileInfo.github, 'social': this.profileInfo.social, 'location': this.profileInfo.location });
    })
    this.handleUserInfo()
  }

  handleUpdateUserProfile() {
    this.profileService.updateProfile(this.profile.value).subscribe((res) => {
      console.log(res);
      this.toastrService.success("Profile Updated Successfully")
    })
  }

  onSubmit(profile: FormGroup) {
    if (profile.valid) {
      console.log(profile.value);
      this.handleUpdateUserProfile();
    }
  }
}
