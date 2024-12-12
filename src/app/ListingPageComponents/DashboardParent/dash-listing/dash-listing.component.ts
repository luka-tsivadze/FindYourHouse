import { Component } from '@angular/core';

@Component({
  selector: 'app-dash-listing',
  templateUrl: './dash-listing.component.html',
  styleUrl: './dash-listing.component.scss'
})
export class DashListingComponent {
 
listing=[
  {name:'Luxury Restaurant',date:'23 Jan 2020', rating:'5.0',status:'Active' },
  {name:'Gym in Town',date:'11 Feb 2020', rating:'4.5',status:'Active' },
  {name:'Cafe in Boston',date:'09 Jan 2020', rating:'5.0',status:'Non-Active' },
  {name:'Car Dealer in New York',date:'24 Feb 2018', rating:'4.5',status:'Active' },
  {name:'Luxury Restaurant',date:'23 Jan 2020', rating:'3.0',status:'Active' },
]

}
