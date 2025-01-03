import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FilterDataUniterService {
  private currentData: any;

  finallData: any = {}; // Initialize finallData to prevent undefined errors

  constructor() {}
  transferData(data: any, filterNumber: number) {
    if (filterNumber === 1) {
      // Map form 1 fields
      this.finallData.prop = data.Propselect || 'Unknown';
      this.finallData.local = data.locselect || 'Unknown';
      this.finallData.text = data.searchText || '';
  
      // Ensure sliders exist and map their values
      if (data.sliders && data.sliders.length >= 2) {
        this.finallData.areaMin = data.sliders[0]?.min || 0;
        this.finallData.areaMax = data.sliders[0]?.max || 0;
        this.finallData.priceMin = data.sliders[1]?.min || 0;
        this.finallData.priceMax = data.sliders[1]?.max || 0;
      } else {
        console.error('Sliders are missing or invalid:', data.sliders);
        this.finallData.areaMin = 0;
        this.finallData.areaMax = 0;
        this.finallData.priceMin = 0;
        this.finallData.priceMax = 0;
      }
  
      // Map selectInputs array values
      this.finallData.statusi = data.selectInputs?.[0]?.value || 'Unknown';
      this.finallData.badrooms = data.selectInputs?.[1]?.value || 'Unknown';
      this.finallData.bathrooms = data.selectInputs?.[2]?.value || 'Unknown';
  
      // Map only checked checkboxes
      this.finallData.chackBoxes = (data.checkboxes || []).filter((box: any) => box.checked);
  
      // Log the transformed data
      console.log('filterData1-transformed:', this.finallData);
    } else if (filterNumber === 2) {
      // Map form 2 fields
      this.finallData.prop = data.propertyType || 'Unknown';
      this.finallData.local = data.location || 'Unknown';
      this.finallData.text = data.searchText || '';
      this.finallData.areaMin = data.areaMin || 0;
      this.finallData.areaMax = data.areaMax || 0;
      this.finallData.priceMin = data.priceMin || 0;
      this.finallData.priceMax = data.priceMax || 0;
  
      this.finallData.statusi = data.propertyStatus || 'Unknown';
      this.finallData.badrooms = data.bedrooms !== 0 ? data.bedrooms : 'Unknown';
      this.finallData.bathrooms = data.bathrooms !== 0 ? data.bathrooms : 'Unknown';
  
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
      console.log('filterData2-transformed:', this.finallData);
    }
  }
  
}
