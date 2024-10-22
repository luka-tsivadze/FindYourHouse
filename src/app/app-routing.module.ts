import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { MainListingComponent } from './ListingPageComponents/main-listing/main-listing.component';
import { ListingParentComponent } from './ListingPageComponents/listing-parent/listing-parent.component';

const routes: Routes = [ 

  { path: '', component:MainPageComponent},
  { path: 'Home', component:MainPageComponent},
  {path: 'Listing', component:ListingParentComponent},
  {path: 'Listing/addProperties', component:MainListingComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
