import { Component, OnInit } from '@angular/core';
import { LanguageChooserService } from '../../../Services/language-chooser/language-chooser.service';
import { ReviewsService } from '../../../Services/reviews/reviews.service';
import { NavInfoService } from '../../../Services/NavService/nav-info.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashreview',
  templateUrl: './dashreview.component.html',
  styleUrl: './dashreview.component.scss'
})
export class DashreviewComponent implements OnInit {

  usersReview=[{
    name:'John Doe',
    time:'22 Minutes ago',
    describe:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat',
    type:'Family House',
    img:'../../../../assets/Imges/Header/CardImges/A-4.jpg',
    stars:4,
    id:0

  },



]
ReviewHeader='Review';
  
  getStarArray(review: number): { filled: boolean }[] {
    return Array.from({ length: 5 }, (_, index) => ({ filled: index < review }));
  }

  constructor(private lang:LanguageChooserService , private review:ReviewsService ,private navServ:NavInfoService, private http:HttpClient ) { }
  ngOnInit(): void {
 this.ReviewHeader=this.lang.chosenLang.Dashboard.DashReview.Header;

  this.review.fetchUserReviews(this.navServ.userId).subscribe(reviews => {
    console.log('do we have an issue ?',reviews);  
  this.usersReview = reviews.map(review => ({
    name: review.saxeli,
    time: review.shefasebis_tarigi_dro || '22 min ago',  //needs fix
    describe: review.mesiji,
    type: '',//maybe we can add type of house here
    img:this.navServ.IsSignedIn.imgLink, 
    stars: review.shefaseba,
    id: review.idi
  }));

  });

  }
  deleteReview(id: number): void {
    this.http.post('delete_review.php', {shefasebis_idi:id}).subscribe({
      next: (resp) => {console.log(resp), 
        this.usersReview = this.usersReview.filter(review => review.id !== id);
      },
      error: (error) => {
        console.error(error);
        console.log(error.error);
      }
    });
    this.usersReview = this.usersReview.filter(review => review.id !== id);
     
  }


}
