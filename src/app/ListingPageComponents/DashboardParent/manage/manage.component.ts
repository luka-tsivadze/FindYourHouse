import { Component } from '@angular/core';
import { title } from 'node:process';
import { LanguageChooserService } from '../../../Services/language-chooser/language-chooser.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.scss'
})
export class ManageComponent {
header='Manage Dashboard';
cards=[
  {imgLink:'../../../../assets/Imges/StaticImg/StaticIcons/list-solid.svg' , amount:'345' , title:'Published Property', class:'green' },
  {imgLink:'../../../../assets/Imges/StaticImg/StaticIcons/list-solid.svg' , amount:'345' , title:'Total Reviews', class:' yellow' },
  {imgLink:'../../../../assets/Imges/StaticImg/StaticIcons/list-solid.svg' , amount:'345' , title:'Messages', class:'blue' },
  {imgLink:'../../../../assets/Imges/StaticImg/StaticIcons/list-solid.svg' , amount:'345' , title:'Times Bookmarked', class:'red' }
];
constructor(private lang:LanguageChooserService){}

ngOnInit(){
  this.header=this.lang.chosenLang.Dashboard.manage.header;
 
  this.cards = this.cards.map((el ,index)=>({
    
    ...el,
    title:this.lang.chosenLang.Dashboard.manage.cards[index].title
    
  
    }))

}

}
