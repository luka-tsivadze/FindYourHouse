import { Injectable, Inject, PLATFORM_ID, OnInit } from '@angular/core';
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
    Home: [  ],
    Property: [ ],
    Pages: [ 
      { a: 'User Panel', Showimg: true,  RouterLink: '', subText: [ {text:'Dashboard',value:'Dashboard'},
        { text:'Profile',value:'Profile' }, {text:'My Properties',value:'My Properties'}, { text:'Favorited Properties',value:'Favorited Properties'} ,
         {text:'Add Property',value:'Add Property'} ,{text:'Payments',value:'Payments'},{text:'Change Password',value:'Change Password'}] },
      { a: 'Login', Showimg: false },
      { a: 'Register', Showimg: false, RouterLink: ''  },
      { a: 'About Us', Showimg: false, RouterLink: '/about' },
    ],
    Blog: [ 
      { a: 'text', Showimg: true, subText: ['text1', 'text2', 'text3'] },
      { a: 'text', Showimg: false },
      { a: 'text', Showimg: false }
    ],
    profileSettings:[{ Text:'Edit Profile', value:'Edit Profile', routes:''},{ Text:'Add Property',value:'Add Property'}
      ,{Text:'Payments', value:'Payments' },{Text:'Change Password', value:'Change Password'},{Text:'Log Out',value:'Log Out'}]
  };

  IsSignedIn = { signed: false, imgLink: '../../assets/Imges/NavImg/man.png', Name: 'Not Recieved' ,number:'' ,email:'NotRecieved@gmail.com' ,gender:''};
  public userData$ = new BehaviorSubject(this.IsSignedIn);
  Languages = ['ENG', 'RUS', 'GEO'];
  chosenLang: string | undefined; //სერვისში გამოუსადეგარია 
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
      if(localStorage.getItem('Language')){
        this.chosenLang = localStorage.getItem('Language');
        
      }
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
  
       this.http.post('get_user_data.php', body).subscribe({                    //place where we could get user info from the server
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
              this.userData$.next(this.IsSignedIn);
        
        },
        error: (error) => {
          console.error('Error fetching user info', error);
        }
      });
    }
  }
  
  
  
}
