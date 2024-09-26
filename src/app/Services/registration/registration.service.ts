import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  // Create a BehaviorSubject to hold the 'displayer' state (default is false)
  private displayerSubject = new BehaviorSubject<boolean>(false);

  // Expose the observable so components can subscribe to changes
  displayer$ = this.displayerSubject.asObservable();

  constructor() {}

  // Method to update the displayer value
  setDisplayer(value: boolean) {
    this.displayerSubject.next(value);
  }

  // Method to get the current displayer value
  getDisplayerValue() {
    return this.displayerSubject.getValue();
  }
}
