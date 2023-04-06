import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/)]),
    repeatPassword: new FormControl('', Validators.required),
    yearly: new FormControl(''),
    genre: new FormControl('', Validators.required),
    accept: new FormControl('', Validators.requiredTrue),
  });

  onSubmit(){
    console.log(this.form.value);
  }
}
