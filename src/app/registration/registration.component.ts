import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RegistrationService } from '../Services/registration/registration.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit, OnDestroy {
  displayer: boolean = false;
  private displayerSubscription: Subscription;
login=false;
LoginForm!: FormGroup;
RegistrForm!: FormGroup;
public RememberMe = new FormControl(false);
  constructor(private registrationService: RegistrationService) {}

  ngOnInit() {
    // Subscribe to the displayer observable
    this.displayerSubscription = this.registrationService.displayer$.subscribe(
      (value: boolean) => {
        this.displayer = value;  // Update local displayer value
      }
    );
    this.LoginForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),// At least one digit
      ]),
      rememberMe: new FormControl(false)   
    });
    
    this.RegistrForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required)
    });
  }

  makeDisplayFlse() {
    // Set displayer to false to hide the form
    window.document.body.style.overflow = "unset";
    this.registrationService.setDisplayer(false);
  }

  chosenBtn() {

    this.login=!this.login;
  }

  ngOnDestroy() {
    // Unsubscribe to avoid memory leaks
    if (this.displayerSubscription) {
      this.displayerSubscription.unsubscribe();
    }
  }

  onSubmitL(): void {
    if (this.LoginForm.valid) {
      console.log('Login form submitted successfully:', this.LoginForm.value);
      console.log('Remember me:', this.RememberMe.value);
    } else {
      console.log('Login form has validation errors');
    }
  }
  onSubmitR(): void {
    if (this.RegistrForm.valid) {
      console.log('Registration form submitted successfully:', this.RegistrForm.value);
      this.login=true
    } else {
      console.log('Registration form has validation errors');
    }
  
  }
}
