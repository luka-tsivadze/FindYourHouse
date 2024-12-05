import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { text } from 'stream/consumers';

@Injectable({
  providedIn: 'root'
})
export class NavInfoService {
  MenuBar = {
    Home: [ 
      { a: 'Home Map', Showimg: true, subText: ['text1', 'text2', 'text3'] },
      { a: 'Home Image', Showimg: true, subText: ['text1', 'text2', 'text3'] },
      { a: 'Home Video', Showimg: true, subText: ['text1', 'text2', 'text3'] },
      { a: 'Home Slider', Showimg: true, subText: ['text1', 'text2', 'text3'] },
      { a: 'Home Styles', Showimg: true, subText: ['text1', 'text2', 'text3'] }
    ],
    Listing: [ 
      { a: 'Listing Grid', Showimg: true, subText: ['text1', 'text2'] },
      { a: 'Listing List', Showimg: true, subText: ['text1', 'text2'] },
      { a: 'Listing Map', Showimg: true, subText: ['text1', 'text2'] },
      { a: 'Listing View', Showimg: true, subText: ['text1', 'text2'] }
    ],
    Property: [ 
      { a: 'Single Property 1', Showimg: false },
      { a: 'Single Property 2', Showimg: false },
      { a: 'Single Property 3', Showimg: true, subText: ['text1', 'text2', 'text3'] },
      { a: 'Single Property 4', Showimg: false },
      { a: 'Single Property 5', Showimg: false },
      { a: 'Single Property 6', Showimg: false }
    ],
    Pages: [ 
      { a: 'User Panel', Showimg: true,  route:'', subText: [ {text:'Dashboard'},{ text:'Profile'}, {text:'My Properties'}, { text:'Favorited Properties'} ,
         {text:'Add Property'} ,{text:'Payements'},{text:'change Password'}] },
      { a: 'Login', Showimg: false,  },
      { a: 'Register', Showimg: false, },
      { a: 'About Us', Showimg: false, }
    ],
    Blog: [ 
      { a: 'text', Showimg: true, subText: ['text1', 'text2', 'text3'] },
      { a: 'text', Showimg: false },
      { a: 'text', Showimg: false }
    ]
  };

  IsSignedIn = { signed: false, imgLink: '../../assets/Imges/NavImg/profileImg.jpg', Name: 'Mary Smith' };
  Languages = ['ENG', 'RUS', 'GEO'];
  chosenLang: string | undefined;
  scrollobser = new BehaviorSubject<boolean>(false);

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private http: HttpClient) {
    if (isPlatformBrowser(this.platformId)) {
    
      const userId = localStorage.getItem('id');
      if (userId) {
        this.IsSignedIn.signed = true;
        this.getUserInfo(userId);
      }
      this.MenuBar.Pages.forEach((element) => {

         if(this.IsSignedIn){
          element.route='Listing'
         }
      });
    }
  }

  updateScrollStatus(status: boolean) {
    this.scrollobser.next(status);  // Update the value

  }

  getUserInfo(userId) {
    if (isPlatformBrowser(this.platformId)) {
       userId = localStorage.getItem('id');
      if (userId) {
        this.http.get(`https://api.example.com/users/${userId}`).subscribe({
          next: (data: any) => {
            this.IsSignedIn.imgLink = data.imgLink;
            this.IsSignedIn.Name = data.name;
          },
          error: (error) => {
            console.error('Error fetching user info', error);
          }
        });
      }
    }
  }
}
