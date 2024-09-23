import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RegistrationService } from '../Services/registration/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit, OnDestroy {
  displayer: boolean = false;
  private displayerSubscription: Subscription;

  constructor(private registrationService: RegistrationService) {}

  ngOnInit() {
    // Subscribe to the displayer observable
    this.displayerSubscription = this.registrationService.displayer$.subscribe(
      (value: boolean) => {
        this.displayer = value;  // Update local displayer value
      }
    );
  }

  makeDisplayFlse() {
    // Set displayer to false to hide the form
    this.registrationService.setDisplayer(false);
  }

  ngOnDestroy() {
    // Unsubscribe to avoid memory leaks
    if (this.displayerSubscription) {
      this.displayerSubscription.unsubscribe();
    }
  }
}
