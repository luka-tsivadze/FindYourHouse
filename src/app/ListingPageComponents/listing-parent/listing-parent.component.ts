import { Component } from '@angular/core';

@Component({
  selector: 'app-listing-parent',
  templateUrl: './listing-parent.component.html',
  styleUrl: './listing-parent.component.scss'
})
export class ListingParentComponent {
Value: string='Add Property';

  receiveValue(value: string): void {
    this.Value = value; // Store the received value
  console.log(this.Value);
  }
}
