import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import {  HttpClientModule } from '@angular/common/http';
import { PartnersFooterComponent } from './partners-footer/partners-footer.component';
import { HeaderComponent } from './header/header.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { MainListingComponent } from './ListingPageComponents/main-listing/main-listing.component';
import { ListingNavComponent } from './ListingPageComponents/listing-nav/listing-nav.component';
import { ListingParentComponent } from './ListingPageComponents/listing-parent/listing-parent.component';
import { ProfileComponent } from './ListingPageComponents/profile/profile.component';
import { ListingFooterComponent } from './ListingPageComponents/listing-footer/listing-footer.component';
import { PasswordChangeComponent } from './ListingPageComponents/password-change/password-change.component';
import { FavoritePropertiesComponent } from './ListingPageComponents/favorite-properties/favorite-properties.component';
import { MyPropertiesComponent } from './ListingPageComponents/my-properties/my-properties.component';
import { AllCardsComponent } from './CardPage/all-cards/all-cards.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FilterComponent } from './CardPage/filter/filter.component';
import { MatSliderModule } from '@angular/material/slider';
import { MainCardsComponent } from './CardPage/main-cards/main-cards.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DetailedInfoParentComponent } from './DetailedInfo/detailed-info-parent/detailed-info-parent.component';
import { CardGallery1Component } from './DetailedInfo/card-gallery1/card-gallery1.component';
import { ScheduleRComponent } from './DetailedInfo/schedule-r/schedule-r.component';
import { AgentInfoComponent } from './DetailedInfo/agent-info/agent-info.component';
import { LeftAmentiesComponent } from './DetailedInfo/left-amenties/left-amenties.component';
import { FloorPlanComponent } from './DetailedInfo/floor-plan/floor-plan.component';
import { RecentPropRComponent } from './DetailedInfo/recent-prop-r/recent-prop-r.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavComponent,
    FooterComponent,
    PartnersFooterComponent,
    HeaderComponent,
    RegistrationComponent,
    MainListingComponent,
    ListingNavComponent,
    ListingParentComponent,
    ProfileComponent,
    ListingFooterComponent,
    PasswordChangeComponent,
    FavoritePropertiesComponent,
    MyPropertiesComponent,
    AllCardsComponent,
    ErrorPageComponent,
    FilterComponent,

    MainCardsComponent,
      DetailedInfoParentComponent,
      CardGallery1Component,
      ScheduleRComponent,
      AgentInfoComponent,
      LeftAmentiesComponent,
      FloorPlanComponent,
      RecentPropRComponent  
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
 HttpClientModule  ,
 ReactiveFormsModule,
 FormsModule,
 MatSliderModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
