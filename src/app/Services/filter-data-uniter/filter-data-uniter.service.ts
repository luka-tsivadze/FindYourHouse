import { Injectable } from '@angular/core';
import { AllCardsService } from '../all-cards/all-cards.service';

@Injectable({
  providedIn: 'root',
})
export class FilterDataUniterService {
  private currentData: any;

  finallData: any = {}; // Initialize finallData to prevent undefined errors
  allcard;
  cards: any[] = [];
  filtredCards
  constructor(private allcards:AllCardsService) {
  
      this.allcards.fetchDataFromApi().subscribe((cards: any[]) => {
        this.allcard = cards; // Set cards after fetching data
    
      });
    
  }
  transferData(data: any, filterNumber: number) {
    if (filterNumber === 1) {
      // Map form 1 fields
      this.finallData.prop = data.Propselect || '0';
      this.finallData.local = data.locselect || '0';

  
      // Ensure sliders exist and map their values
      if (data.sliders && data.sliders.length >= 2) {
        this.finallData.areaMin = data.sliders[0]?.min || 0;
        this.finallData.areaMax = data.sliders[0]?.max || 0;
        this.finallData.priceMin = data.sliders[1]?.min || 0;
        this.finallData.priceMax = data.sliders[1]?.max || 0;
      } else {
      
        this.finallData.areaMin = 0;
        this.finallData.areaMax = 0;
        this.finallData.priceMin = 0;
        this.finallData.priceMax = 0;
      }
  
      // Map selectInputs array values
      this.finallData.statusi = data.propstatus || '0';
      this.finallData.badrooms = data.selectInputs?.[0]?.value || '0';
      this.finallData.bathrooms = data.selectInputs?.[1]?.value || '0';
 
      // Map only checked checkboxes
      this.finallData.chackBoxes = (data.checkboxes || []).filter((box: any) => box.checked);
          
      // Log the transformed data
      if(data.selectInputs[1].value=="Bathrooms"){
        this.finallData.bathrooms='0'
  
      }
      if(data.selectInputs[0].value=="Bedrooms"){
        this.finallData.badrooms='0'
  
    
      }
  
    } else if (filterNumber === 2) {
      // Map form 2 fields
      this.finallData.prop = data.propertyType || '0';
      this.finallData.local = data.location || '0';
  
      this.finallData.areaMin = data.areaMin || 0;
      this.finallData.areaMax = data.areaMax || 0;
      this.finallData.priceMin = data.priceMin || 0;
      this.finallData.priceMax = data.priceMax || 0;
  
      this.finallData.statusi = data.propertyStatus || '0';
      this.finallData.badrooms = data.bedrooms !== 0 ? data.bedrooms : '0';
      this.finallData.bathrooms = data.bathrooms !== 0 ? data.bathrooms : '0';
      

      // Filter only checked checkboxes from feature keys
      const featureKeys = [
        'airConditioning',
        'alarm',
        'centralHeating',
        'dryer',
        'gym',
        'laundryRoom',
        'microwave',
        'outdoorShower',
        'refrigerator',
        'swimmingPool',
        'tvCable',
        'washer',
        'wifi',
        'windowCovering',
      ];
  
      this.finallData.chackBoxes = featureKeys
        .filter((key) => data[key]) // Include only true values
        .map((key) => ({ name: key, checked: true }));
  
      // Log the transformed data
  
  
    }
 
  
    console.log('ფილტრის ინფორმაცია ბექისთვის:', this.finallData);
    // this.filter(this.finallData , this.allcard);
  }
  filter(filtredValues:any ,allcards:any ){
   console.log('final-Filter:', filtredValues  ,'allCards-in-Filter:', allcards);
   allcards.forEach((card) => {
  
    // if(filtredValues.statusi!='Property Status' && filtredValues.statusi== card.statusi){
    //         if(filtredValues.local!='Location' && filtredValues.local==card.location ){
    //            if(filtredValues.badrooms !='Bedrooms' && filtredValues.badrooms==card.bedrooms){
    //             if(filtredValues.Bathrooms !='Bathrooms' && filtredValues.badrooms==card.bathrooms){
    //               if(filtredValues.prop!=0 && filtredValues.prop==card.prop){
                    
    //               }
    //             }
    //            }
    //         }
    // }



   })

  }
  
  
}




