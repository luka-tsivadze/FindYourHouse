import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { text } from 'stream/consumers';
import { Router } from 'express';

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
      { a: 'User Panel', Showimg: true,  RouterLink: '', subText: [ {text:'Dashboard'},{ text:'Profile'}, {text:'My Properties'}, { text:'Favorited Properties'} ,
         {text:'Add Property'} ,{text:'Payements'},{text:'change Password'}] },
      { a: 'Login', Showimg: false },
      { a: 'Register', Showimg: false, RouterLink: ''  },
      { a: 'About Us', Showimg: false, RouterLink: '/about' },
    ],
    Blog: [ 
      { a: 'text', Showimg: true, subText: ['text1', 'text2', 'text3'] },
      { a: 'text', Showimg: false },
      { a: 'text', Showimg: false }
    ]
  };

  IsSignedIn = { signed: false, imgLink: '../../assets/Imges/NavImg/man.png', Name: 'Mary Smith' ,number:'592837189' ,email:'ksdnvest@gmail.com' ,gender:''};
  Languages = ['ENG', 'RUS', 'GEO'];
  chosenLang: string | undefined;
  scrollobser = new BehaviorSubject<boolean>(false);
  
userId
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private http: HttpClient) {
    if (isPlatformBrowser(this.platformId)) {
    
      this.userId = localStorage.getItem('id');
      if (this.userId) {
        this.IsSignedIn.signed = true;
        this.getUserInfo(this.userId);
        if (localStorage.getItem('activeElement')=='Log Out'){
          localStorage.removeItem('id');
        }
      }
      this.MenuBar.Pages.forEach((element) => {

         if(this.IsSignedIn){
            if(element.a=='user Panel'){
              element.RouterLink='Listing';
            }

         }
      });
    }
  }

  updateScrollStatus(status: boolean) {
    this.scrollobser.next(status);  // Update the value

  }
  getUserInfo(userId: string): void {
    if (isPlatformBrowser(this.platformId)) {
      const localUserId = localStorage.getItem('id');
      const resolvedUserId = userId || localUserId;
  
      if (!resolvedUserId) {
        console.error('No userId available to fetch user info.');
        return;
      }
  
      const body = { id: resolvedUserId }; // Send ID in the request body
  
      this.http.post('get_user_data.php', body).subscribe({
        next: (data: any) => {
              this.IsSignedIn.Name = data[0].saxeli + ' ' + data[0].gvari;
              this.IsSignedIn.number = data[0].nomeri;
              this.IsSignedIn.email = data[0].maili;
              this.IsSignedIn.gender = data[0].sqesi;
              if(data[0].img_link){
                this.IsSignedIn.imgLink = data[0].img_link;
              }else if(data[0].sqesi=='male'){
                this.IsSignedIn.imgLink = '../../assets/Imges/NavImg/man.png';
              }else if(data[0].sqesi=='famale'){
                this.IsSignedIn.imgLink = '../../assets/Imges/NavImg/girl.png';

              }
          console.log('User info fetched successfully:', data);
        },
        error: (error) => {
          console.error('Error fetching user info', error);
        }
      });
    }
  }
  
  
  
}
