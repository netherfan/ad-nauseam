import { UserService } from './../../../services/user.service';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  user: User;

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/)]),
    repeatPassword: new FormControl('', Validators.required),
    yearly: new FormControl(),
    genre: new FormControl(''),
    accept: new FormControl('', Validators.requiredTrue),
  });

  constructor ( private userService: UserService) {}

  onSubmit(){
    this.user = {
      name: this.form.value.name,
      username: this.form.value.username,
      surname: this.form.value.surname,
      email: this.form.value.email,
      password: this.form.value.password,
      yearly: this.form.value.yearly,
      genre: this.form.value.genre
    }

    this.userService.createUser(this.user).pipe(take(1)).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
