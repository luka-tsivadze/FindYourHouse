import { ChangeDetectorRef, Component } from '@angular/core';
import { NavInfoService } from '../../Services/NavService/nav-info.service';
import { MainPageDataService } from '../../Services/mainPageService/main-page-data.service';
import { AllCardsService } from '../../Services/all-cards/all-cards.service';
import { PropertyInformationService } from '../../Services/Property-info/property-information.service';
import { Router } from '@angular/router';
import { FilterDataUniterService } from '../../Services/filter-data-uniter/filter-data-uniter.service';

@Component({
  selector: 'app-all-cards',
  templateUrl: './all-cards.component.html',
  styleUrls: ['./all-cards.component.scss'],
})
export class AllCardsComponent {
  cards: any[] = [];
  FeaturePS = this.mainPageService.featuredPropertiesStatic;

  ActivePage = 0;
  index = 0;
  pagesInfo = [];
  finalInfo = [];
  activePage = [];
  reviewIndices = [];
  pageIndices = [];
  pages: number;
  dataState = false;
  amountOfCards = 9;
  filteredCards: any[] = [];

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private filterService: FilterDataUniterService,
    private navService: NavInfoService,
    private router: Router,
    private detailedservice: PropertyInformationService,
    private mainPageService: MainPageDataService,
    private cardsService: AllCardsService
  ) {
    this.navService.scrollobser.next(true);
  }

  ngOnInit() {

    this.cardsService.fetchDataFromApi().subscribe((cards: any[]) => {

      this.cards = cards;
      this.filteredCards = cards; // Set filtered cards to all cards initially
      this.pageFunction(); // Call pageFunction after cards are ready
    });
    this.cardsService.data$.subscribe((value) => {
      this.dataState = value;
      console.log('dataState', this.dataState);
     });
       
    // this.restoreState(); // Restore the state if returning to this page
  }

  ngAfterViewInit() {


    this.filterService.filtredCards$.subscribe((filteredIds) => {
      if ((!filteredIds || filteredIds.length == 0) && !this.filterService.wasCalled) {
        // If no filters are applied or the filterIds array is empty, reset to all cards
        console.log('Observer-triggered update detected; skipping UI updates.');
        return; // Skip further logic
      }
      // Filter the cards
      this.filteredCards = this.cards.filter((card) =>
        filteredIds.some((filterCard) => filterCard.idi === card.id)
      );
    
      console.log('Filtered Cards:', this.filteredCards, 'Filtered Ids:', filteredIds);
      this.resetPagination();
      this.changeDetectorRef.detectChanges();
    });
    
    
  }

  resetPagination() {
    this.index = 0;
    this.pagesInfo = [];
    this.finalInfo = [];
    this.pageIndices = [];
    this.pageFunction();
    this.activePage = this.finalInfo[0] || [];
  }

  pageFunction() {
    this.pages = Math.ceil(this.filteredCards.length / this.amountOfCards);
    this.pageIndices = [];
    this.finalInfo = [];

    let index = 0;
    for (let i = 0; i < this.pages; i++) {
      this.pageIndices.push(i);
      this.pagesInfo = [];
      for (let j = 0; j < this.amountOfCards && index < this.filteredCards.length; j++) {
        this.pagesInfo.push(this.filteredCards[index]);
        index++;
      }
      this.finalInfo.push([...this.pagesInfo]);
    }

    this.activePage = this.finalInfo[0] || [];
    console.log('Filtered Cards - Active Page:', this.activePage);
  }

  chosenPage(index) {
    if (this.finalInfo[index]) {
      this.activePage = this.finalInfo[index];
      this.ActivePage = index;
      console.log('index', this.activePage);
    }
  }

  routertodetailedInfo(cardId: number): void {
    this.detailedservice.setCardId(cardId);
    this.router.navigate(['/allCards', cardId]);
  }

  restoreState() {
    if (this.cards.length > 0) {
      this.filteredCards = this.cards;
      this.pageFunction();
    } else {
      this.cardsService.fetchDataFromApi().subscribe((cards: any[]) => {
        console.log('Restoring state with fetched data:', cards);
        this.cards = cards;
        this.filteredCards = [...cards];
        this.pageFunction();
      });
    }
  }
}
