import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ListingServiceService } from '../../Services/listing-service/listing-service.service';
import { LanguageChooserService } from '../../Services/language-chooser/language-chooser.service';

@Component({
  selector: 'app-my-properties',
  templateUrl: './my-properties.component.html',
  styleUrls: ['./my-properties.component.scss']
})
export class MyPropertiesComponent implements OnInit {
  allCardEl = [
    // { id: 6, imgLink: '../../../assets/Imges/StaticImg/CardImges/fp-2.jpg', title: 'Spacious Family Home', review: 5, reviewedAmount: 7, view: 150, date: '07.10.2024', location: '135 Pine St, Chicago, IL' },
    // ... (other static elements)
  ];


  starObject = [{ star: 1 }, { star: 2 }, { star: 3 }, { star: 4 }, { star: 5 }];
  pages: number;
  ActivePage = 0;
  index = 0;
  pagesInfo = [];
  finalInfo = [];
  activePage = [];
  reviewIndices = [];
  pageIndices = [];
  isLoading = true; // New loading flag

  staticData={
    Header:'Top Properties',
    date:'Date Added',
    Views:'Views',
    action:'Actions',
    rew:"Reviews",
    Ed:'Edit',
    prev:'Previous',
    next:'Next'
  }
  constructor(private http: HttpClient ,private cdr: ChangeDetectorRef ,private sharedService:ListingServiceService 
    ,private lang:LanguageChooserService) {

  }
  ngOnInit(): void {
    this.getuserData()
    this.staticData=this.lang.chosenLang.myProp;

  }
 getuserData(){
this.sharedService.userData().subscribe({
next:(data)=>{
  this.allCardEl=data;
  this.isLoading = false; // Data loading completed

},
error:(error)=>console.error('Error:',error),
complete:()=>{
  this.sharedService.views(this.allCardEl).subscribe({
    next:(data)=>{
      this.allCardEl = data;
      this.pageFunction(); // Recalculate pages after data is updated
    }
  });
},

});
 }

 views() {  //move to listing-service.service.ts
  const gancxadebisIds = this.activePage.map(element => element.id).join(',');

  if (!gancxadebisIds) {
    return; // Avoid unnecessary API calls
  }

  this.http.get(`get-views-counted-data.php`, { params: { gancxadebis_ids: gancxadebisIds } }).subscribe({
    next: (data: any) => {
      console.log('Views data:', data);

      this.activePage = this.activePage.map(item => ({
        ...item,
        view: data[item.id] || 0 // Assign API result or default to 0
      }));
    },
    error: (error) => console.error('Error fetching views:', error),
  });
}




 
  
 
    editItem(el) {
      localStorage.setItem('ActiveElement', 'Add Property'); // Update the active component
      console.log(el);
      this.sharedService.setEditItemId(el); // Pass the ID to the shared service
    }

  
  pageFunction() {
    this.finalInfo = [];
    this.pageIndices = [];
    this.index = 0;
    
    if (this.allCardEl.length > 0) {
      this.pages = Math.ceil(this.allCardEl.length / 6);

      for (let i = 0; i < this.pages; i++) {
        this.pageIndices.push(i);
        this.pagesInfo = [];
        for (let j = 0; j < 6 && this.index < this.allCardEl.length; j++) {
          this.pagesInfo.push(this.allCardEl[this.index]);
          this.index++;
        }
        this.finalInfo.push([...this.pagesInfo]);
      }

      this.activePage = this.finalInfo[0];
    } else {
      console.warn('No cards available to paginate.');
    }
  }

  getStarArray(review: number): { filled: boolean }[] {
    return Array.from({ length: 5 }, (_, index) => ({ filled: index < review }));
  }

  removeitem(index: number) {
    this.http.post('del_my_house.php', { id_2: index }).subscribe((data: any) => {
      console.log('Remove item response:', data);
  
      if (data?.status === 'success') {
        // Remove the item from allCardEl
        const globalIndex = this.allCardEl.findIndex((card) => card.id === index);
        if (globalIndex !== -1) {
          this.allCardEl.splice(globalIndex, 1);
  
          // Update activePage based on the current active page
          const activeIndex = this.activePage.findIndex((card) => card.id === index);
          if (activeIndex !== -1) {
            this.activePage.splice(activeIndex, 1);
          }
  
          // Recalculate pagination if necessary
          this.index = 0; // Reset index for pagination
          this.finalInfo = []; // Clear pagination data
          this.pageIndices = []; // Clear page indices
          this.pageFunction(); // Recreate pagination
          this.cdr.detectChanges(); // Manually trigger change detection
        } else {
          console.error('Item not found in global list');
        }
      } else {
        console.error('Failed to remove item:', data?.message || 'Unknown error');
      }
    });
  }
  
  
  

  chosenPage(index) {
    if (this.finalInfo[index]) {
      this.activePage = this.finalInfo[index];
      this.ActivePage = index;
    }
  }
}
