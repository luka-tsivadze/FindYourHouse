import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-listing-parent',
  templateUrl: './listing-parent.component.html',
  styleUrl: './listing-parent.component.scss'
})
export class ListingParentComponent {
Value: string='addProperties';  

constructor(@Inject(PLATFORM_ID) private platformId: object) { 
}
ngOnInit(): void {
  if (isPlatformBrowser(this.platformId)) {
    // Only access localStorage if in the browser
    this.Value=localStorage.getItem('ActiveElement');

  }
}
ngOnChanges(): void {
  if (isPlatformBrowser(this.platformId)) {
    // Only access localStorage if in the browser
    localStorage.getItem('ActiveElement');

  }
}
  receiveValue(value: string): void {
 
    console.log(this.Value);
    this.Value = value; // Store the received value
  }
}
