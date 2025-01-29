import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-signin',
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private http: HttpClient) {}

  onSubmit() {
    const signInData = { email: this.email, password: this.password };

    this.http.post(`${environment.backendUrl}/api/auth/signin`, signInData, { responseType: 'text' }).subscribe(
        (response: string) => {
            console.log('Sign-in successful:', response);
            if (response === 'Sign-in successful') {
                alert('Sign-in successful!');
                this.router.navigate(['/Home']);
            } else {
                alert('Invalid credentials. Please try again.');
            }
        },
        (error) => {
            console.error('Sign-in failed:', error);
            alert('Sign-in failed. Please try again.');
        }
    );
}
}
