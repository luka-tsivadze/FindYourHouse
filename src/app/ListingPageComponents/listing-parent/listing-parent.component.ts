import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { set } from 'ol/transform';

@Component({
  selector: 'app-listing-parent',
  templateUrl: './listing-parent.component.html',
  styleUrl: './listing-parent.component.scss'
})
export class ListingParentComponent {
Value: string='addProperties';  


constructor(@Inject(PLATFORM_ID) private platformId: object,  private router: Router) { 
}
ngOnInit(): void {
  if (isPlatformBrowser(this.platformId)) {

    if(localStorage.getItem('ActiveElement')){
    this.Value=localStorage.getItem('ActiveElement');
  }else{
this.Value='Add Property';
  }
   

  }
}
ngOnChanges(): void {
  if (isPlatformBrowser(this.platformId)) {
    // Only access localStorage if in the browser
    localStorage.getItem('ActiveElement');

  }
}
  receiveValue(value: string): void {
 
    this.Value = value; // Store the received value
    console.log(this.Value);
    if(value=='Log Out'){
      localStorage.removeItem('id');
      this.router.navigate(['/']);
      setTimeout(() => {
        window.location.reload();
      }, 0);
     

  }
  }
}
