import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { MainListingComponent } from './ListingPageComponents/main-listing/main-listing.component';
import { ListingParentComponent } from './ListingPageComponents/listing-parent/listing-parent.component';
import { AllCardsComponent } from './CardPage/all-cards/all-cards.component';
import { error } from 'console';
import { ErrorPageComponent } from './error-page/error-page.component';
import { MainCardsComponent } from './CardPage/main-cards/main-cards.component';

const routes: Routes = [ 

  { path: '', component:MainPageComponent},
  { path: 'Home', component:MainPageComponent},
  {path: 'Listing', component:ListingParentComponent},
  {path: 'Listing/:id', component:ListingParentComponent},
  {path: 'allCards', component:MainCardsComponent},
  {path: '**', component:ErrorPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
