import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-properties',
  templateUrl: './my-properties.component.html',
  styleUrls: ['./my-properties.component.scss']
})
export class MyPropertiesComponent {
  allCardEl = [
    { id: 6, imgLink: '../../../assets/Imges/StaticImg/CardImges/fp-2.jpg', title: 'Spacious Family Home', review: 5, reviewedAmount: 7, view: 150, date: '07.10.2024', location: '135 Pine St, Chicago, IL' },
    // ... (other static elements)
  ];

  id = localStorage.getItem('id');
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

  constructor(private http: HttpClient) {
    this.userData();
  }

  ngOnInit() {
    // pageFunction will now be called after userData finishes
  }

  userData() {
    this.http.post('get_my_houses.php', { id: this.id }).subscribe((data: any) => {
      console.log('Data for MyProperties:', data);
  
      if (data && data.length > 0) {
        this.allCardEl = data.map((element) => {
          // Parse the fotoebi JSON string to extract the image list
          let firstImg = '../../../assets/Imges/StaticImg/CardImges/fp-2.jpg'; // Default image
          try {
            const images = JSON.parse(element.fotoebi);
         
            if (Array.isArray(images) && images.length > 0) {
              firstImg = `houses/${element.amtvirtvelis_maili}/${element.gancxadebis_saidentifikacio_kodi}/photos/${images[0]}`;
            }
          } catch (error) {
            console.error('Error parsing fotoebi JSON:', error);
          }
  
          return {
            id: element.idi,
            imgLink: firstImg, // Use the first image or default if none
            title: element.satauri || 'No Title',
            review: 3, // Placeholder for actual logic
            reviewedAmount: 0, // Placeholder for actual logic
            view: 0, // Placeholder for actual logic
            date: element.statusis_gaaqtiurebis_tarigi || 'No Date',
            location: element.misamarti || 'No Location',
          };
        });
      } else {
        console.warn('No data received. Retaining static elements.');
      }
  
      this.isLoading = false; // Data loading completed
      this.pageFunction(); // Recalculate pages after data is updated
    });
  }
  

  pageFunction() {
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

  removeitem(index) {

    this.http.post('del_my_house.php', { id_2:index }).subscribe((data: any) => {
      console.log('Remove item response:', data);
      window.location.reload();
      this.userData(); // Refresh data after removal
    });
  }

  chosenPage(index) {
    if (this.finalInfo[index]) {
      this.activePage = this.finalInfo[index];
      this.ActivePage = index;
    }
  }
}
