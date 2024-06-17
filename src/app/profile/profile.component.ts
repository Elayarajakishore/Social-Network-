import { Component } from '@angular/core';
import { ProfileService } from '../sevices/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  name: string = '';
  dob: string = '';
  gender: string = '';
  email: string = '';
  summary: string = '';
  profilePhoto: string = '';

  constructor(private profileService: ProfileService) {}

  onPhotoSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.profilePhoto = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  saveProfile() {
    const profileData = {
      name: this.name,
      dob: this.dob,
      gender: this.gender,
      email: this.email,
      summary: this.summary,
      profilePhoto: this.profilePhoto
    };

    this.profileService.saveProfile(profileData).subscribe(
      (response: any) => {
        console.log('Profile saved successfully', response);
      },
      (error: any) => {
        console.error('Error saving profile', error);
      }
    );
  }
}
