import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PropertyInformationService } from '../../Services/Property-info/property-information.service';
import { Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LanguageChooserService } from '../../Services/language-chooser/language-chooser.service';

@Component({
  selector: 'app-review-adder',
  templateUrl: './review-adder.component.html',
  styleUrl: './review-adder.component.scss'
})
export class ReviewAdderComponent  implements OnInit {
starRating = [{id:0, filled:true }, {id: 1, filled:true}, {id: 2, filled:true}, {id:3 ,filled:true},{id: 4 ,filled:true}];
reviewForm:FormGroup;
gancxadebis_id=this.prop.chosenCard.id;
momxmareblis_id=this.prop.userId;
shefaseba:number;
reviewAd={
header:'Add Review',
p:'your Rating For This  Listing',
placeholderN:'Review',
submit:'Submit Review'

}

constructor(private prop:PropertyInformationService, private http:HttpClient ,private lang:LanguageChooserService ) {
this.reviewAd=this.lang.chosenLang.DetailedInfo.reviewAd;

 }
ngOnInit(){
  
  this.reviewForm = new FormGroup({
    // saxeli: new FormControl('', Validators.required),
    // gvari: new FormControl('', Validators.required),
    // maili: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
    gancxadebis_id: new FormControl('', ),
    momxmareblis_id: new FormControl(''),
    shefaseba: new FormControl('')
  });

}


onSubmit(){

this.reviewForm.value.shefaseba =this.shefaseba;
this.reviewForm.value.gancxadebis_id = this.gancxadebis_id;
this.reviewForm.value.momxmareblis_id = this.momxmareblis_id;
console.log(this.reviewForm.value);
if(this.reviewForm.value.shefaseba && this.reviewForm.value.momxmareblis_id){
this.http.post('save_review.php', this.reviewForm.value).subscribe({
next: (data) => { console.log(data); },
error: (error) => { console.log(error); }

})
}
}

rater(star){

 
      for(let i = 0; i < star; i++){
        this.starRating[i].filled = true;
      }
      for(let i = star; i < 5; i++){
        this.starRating[i].filled = false;
      }
 
      
this.shefaseba =(5-star);

  }
}


