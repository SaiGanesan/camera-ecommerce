import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel binding
import { CommonModule } from '@angular/common';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterModule, FormsModule,CommonModule], // Add RouterModule and FormsModule
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  user = {
    fullName: '',
    email: '',
    password: '',
  };
  confirmPassword = '';
  apiUrl = `${environment.backendUrl}/api/auth/signup`; // Replace with your backend endpoint

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    if (this.user.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    this.http.post(this.apiUrl, this.user).subscribe(
      () => {
        alert('User registered successfully!');
        this.router.navigate(['/signinfinal']);
      },
      (error) => {
        console.error('Error occurred:', error);
        alert(error.error || 'Failed to register user.');
      }
    );
  }
}
