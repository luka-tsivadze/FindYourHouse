import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EngService {
  NavE=
    {Home:'Home' , Listing:'Listing',
      Property:'Property', Pages:'Pages',Blog:'Blog',
      Contact:'contact',SignIn:'SignIn',AddListing:'Add Listing'
    }
  

  constructor() { }
}
