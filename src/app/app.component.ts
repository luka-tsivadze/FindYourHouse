import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AllCardsService } from './Services/all-cards/all-cards.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'FindYourHouse';
  loaded = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object ,private allCardsService:AllCardsService) {}
  ngOnInit(): void {
    // Trigger the fetch as soon as the app loads
    
    this.allCardsService.fetchDataFromApi();
  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Use setTimeout to ensure scroll adjustment happens after other processes
      setTimeout(() => {
        window.scrollTo(0, 0);
        this.loaded = true; // Set the loaded flag after scrolling
      }, 1);
    }
  }
}
