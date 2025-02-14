import { Component } from '@angular/core';
import { title } from 'node:process';
import { LanguageChooserService } from '../../../Services/language-chooser/language-chooser.service';
import { DashboardService } from '../../../Services/dashboard/dashboard.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.scss'
})
export class ManageComponent {
header='Manage Dashboard';
back_end;
cards=[
  {imgLink:'../../../../assets/Imges/StaticImg/StaticIcons/list-solid.svg' , amount:'345' , title:'Published Property', class:'green' },
  {imgLink:'../../../../assets/Imges/StaticImg/StaticIcons/list-solid.svg' , amount:'345' , title:'Total Reviews', class:' yellow' },
  {imgLink:'../../../../assets/Imges/StaticImg/StaticIcons/list-solid.svg' , amount:'345' , title:'Messages', class:'blue' },
  {imgLink:'../../../../assets/Imges/StaticImg/StaticIcons/list-solid.svg' , amount:'345' , title:'Times Bookmarked', class:'red' }
];
constructor(private lang:LanguageChooserService , private dashServ:DashboardService){

}

ngOnInit(){
  this.header=this.lang.chosenLang.Dashboard.manage.header;
 
  this.cards = this.cards.map((el ,index)=>({
    
    ...el,
    title:this.lang.chosenLang.Dashboard.manage.cards[index].title
    
  
    }))
this.dashServ.fetchDashboardData();
this.back_end=this.dashServ.signalData();
console.log('data is fsl', this.back_end);
}

}
