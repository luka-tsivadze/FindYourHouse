import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavInfoService {
MenuBar={
Home:[    //if Showimg is true then subText array must have data for sub menu
   {a:'Home Map', Showimg: true , subText:['text1','text2','text3']},
  {a:'Home Image', Showimg: true , subText:['text1','text2','text3']},
  {a:'Home Video', Showimg: true , subText:['text1','text2','text3']},
  {a:'Home Slider', Showimg: true , subText:['text1','text2','text3']},
  {a:'Home Styles', Showimg: true , subText:['text1','text2','text3']}],
  Listing:[  
    {a:'Listing Grid', Showimg: true , subText:['text1','text2']},
    {a:'Listing List', Showimg: true , subText:['text1','text2']},
    {a:'Listing Map', Showimg: true , subText:['text1','text2']},
    {a:'Listing View', Showimg: true , subText:['text1','text2']}],

  Property:[  {a:'Single Property 1', Showimg: false},
      {a:'Single Property 2', Showimg: false},
      {a:'Single Property 3', Showimg: true, subText:['text1','text2','text3']},
      {a:'Single Property 4', Showimg: false},
      {a:'Single Property 5', Showimg: false},
      {a:'Single Property 6', Showimg: false}
    ],
  Pages:[  {a:'Shop', Showimg: true, subText:['Product Sidebar','Product','text3']},
    {a:'text', Showimg: false},
    {a:'text', Showimg: true , subText:['text1','text2','text3']}],
  Blog:[  {a:'text', Showimg: true , subText:['text1','text2','text3']},
      {a:'text', Showimg: false},
      {a:'text', Showimg:false}]
}
IsSignedIn={signed:false, imgLink:'../../assets/Imges/NavImg/profileImg.jpg', Name:'mary'}
Languages=['ENG','RUS','GEO']
chosenLang
  constructor() { }

}
