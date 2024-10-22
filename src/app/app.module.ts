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
    MyPropertiesComponent  
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
 HttpClientModule  ,
 ReactiveFormsModule,
 FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
