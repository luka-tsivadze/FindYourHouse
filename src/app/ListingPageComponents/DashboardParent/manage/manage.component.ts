import { Component } from '@angular/core';
import { title } from 'node:process';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.scss'
})
export class ManageComponent {
cards=[
  {imgLink:'../../../../assets/Imges/StaticImg/StaticIcons/list-solid.svg' , amount:'345' , title:'Published Property', class:'green' },
  {imgLink:'../../../../assets/Imges/StaticImg/StaticIcons/list-solid.svg' , amount:'345' , title:'Total Reviews', class:' yellow' },
  {imgLink:'../../../../assets/Imges/StaticImg/StaticIcons/list-solid.svg' , amount:'345' , title:'Messages', class:'blue' },
  {imgLink:'../../../../assets/Imges/StaticImg/StaticIcons/list-solid.svg' , amount:'345' , title:'Times Bookmarked', class:'red' }
];


}
