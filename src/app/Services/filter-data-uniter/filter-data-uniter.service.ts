import { Injectable } from '@angular/core';
import { AllCardsService } from '../all-cards/all-cards.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterDataUniterService {
  private currentData: any;

  finallData: any = {}; // Initialize finallData to prevent undefined errors
  allcard;
  wasCalled ;
  cards: any[] = [];
  private filtredCards=new BehaviorSubject<any[]>([]);
  filtredCards$=this.filtredCards.asObservable();
  constructor(private allcards:AllCardsService , private http: HttpClient) {
this.wasCalled=false;  

  }
  transferData(data: any, filterNumber: number) {
    this.wasCalled=true;
    this.finallData = {};
    if (filterNumber === 1) {
      this.finallData.prop = data.Propselect || '0';
      this.finallData.local = data.locselect || '0';
  
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
  
      this.finallData.statusi = data.propstatus || '0';
      this.finallData.badrooms = data.selectInputs?.[0]?.value || '0';
      this.finallData.bathrooms = data.selectInputs?.[1]?.value || '0';
  
      if (data.selectInputs[1]?.value === "Bathrooms") {
        this.finallData.bathrooms = '0';
      }
      if (data.selectInputs[0]?.value === "Bedrooms") {
        this.finallData.badrooms = '0';
      }
  
      // Transform checkboxes into flat properties
      const allFeatures = [
        'Air Conditioning',
        'Microwave',
        'Refrigerator',
        'Outdoor Shower',
        'Window Covering',
        'Alarm',
        'Swimming Pool',
        'Central Heating',
        'Laundry Room',
        'Gym',
        'TV Cable & wifi',
        'Dryer',
        'Washer',
      ];
  
      allFeatures.forEach((feature) => {
        this.finallData[feature] = !!(data.checkboxes || []).find((box: any) => box.name === feature && box.checked);
      });

    }else if (filterNumber === 2) {
        this.finallData.prop = data.propertyType || '0';
        this.finallData.local = data.location || '0';
      
        this.finallData.areaMin = data.areaMin || 0;
        this.finallData.areaMax = data.areaMax || 0;
        this.finallData.priceMin = data.priceMin || 0;
        this.finallData.priceMax = data.priceMax || 0;
      
        this.finallData.statusi = data.propertyStatus || '0';
        this.finallData.badrooms = data.bedrooms !== 0 ? data.bedrooms : '0';
        this.finallData.bathrooms = data.bathrooms !== 0 ? data.bathrooms : '0';
      
        // Transform features into flat properties
        const allFeatures = [
          'airConditioning',
          'wifi',
          'swimmingPool',
          'tvCable',
          'centralHeating',
          'dryer',
          'gym',
          'washer',
          'alarm',
          'refrigerator',
          'windowCovering',
          'outdoorShower',
          'laundryRoom',
          'microwave',
        ];
      
        allFeatures.forEach((feature) => {
          this.finallData[feature] = data[feature] || false; // Use the value from the form group
        });
      
 
      }
      
      this.allcard=this.allcards.back_end_data
console.log('finall filtred Data',this.finallData);
    console.log('allcard',this.allcard);
    const filtered = this.filterCards(this.allcard, this.finallData);
    this.filtredCards.next(filtered);
    

  
  }
  filterCards(allCard: any[], filter: any): any[] {
    const bilingualMapping = {
      tipi: {
        Apartment: ["Apartment", "ბინა"],
        House: ["House", "სახლი"],
        Commercial: ["Commercial", "კომერციული"],
        Garage: ["Garage", "გარაჟი"],
      },
      garigebis_tipi: {
        "For Sale": ["For Sale", "იყიდება"],
        "For Rent": ["For Rent", "ქირავდება"],
        "Rented daily": ["Rented daily", "ქირავდება დღიურად"],
        "Pledge": ["Pledge", "გირავდება"],
        "Apartments Under Construction": ["Apartments Under Construction", "აპარტამენტები მშენებლობით"],
      },
      citys: {
        Tbilisi: ["Tbilisi", "თბილისი"],
        Batumi: ["Batumi", "ბათუმი"],
        Kutaisi: ["Kutaisi", "ქუთაისი"],
        Rustavi: ["Rustavi", "რუსთავი"],
        Zugdidi: ["Zugdidi", "ზუგდიდი"],
        Telavi: ["Telavi", "თელავი"],
        Bakuriani: ["Bakuriani", "ბაკურიანი"],
        Kobuleti: ["Kobuleti", "ქობულეთი"],
      },
    };
  
    const normalizeValue = (value: string, map: Record<string, string[]>): string | undefined => {
      if (!value) return undefined;
      const lowerValue = value.toLowerCase();
      return Object.keys(map).find((key) =>
        map[key].some((mappedValue) => mappedValue.toLowerCase() === lowerValue)
      );
    };
  
    return allCard.filter((card) => {
      const normalizedTipi = normalizeValue(card.tipi, bilingualMapping.tipi) || card.tipi;
      const normalizedGarigebisTipi =
        normalizeValue(card.garigebis_tipi, bilingualMapping.garigebis_tipi) || card.garigebis_tipi;
      const normalizedCity = normalizeValue(card.qalaqi, bilingualMapping.citys) || card.qalaqi;
  
      const matchesPropertyStatus =
        filter.statusi === "0" || bilingualMapping.garigebis_tipi[filter.statusi]?.includes(normalizedGarigebisTipi);
      const matchesPropertyType =
        filter.prop === "0" || bilingualMapping.tipi[filter.prop]?.includes(normalizedTipi);
      const matchesLocation = filter.local === "0" || bilingualMapping.citys[filter.local]?.includes(normalizedCity);
      const matchesBedrooms = filter.badrooms === "0" || card.sadzinebeli === filter.badrooms;
      const matchesBathrooms = filter.bathrooms === "0" || card.sveli_wertilebis_raodenoba === filter.bathrooms;
      const matchesArea =
        parseInt(card.fartobi) >= (filter.areaMin || 0) && parseInt(card.fartobi) <= (filter.areaMax || Infinity);
      const matchesPrice =
        parseInt(card.fasi) >= (filter.priceMin || 0) && parseInt(card.fasi) <= (filter.priceMax || Infinity);
  
      const checkboxFilters = [
        { key: "airConditioning", field: "kondincioneri" },
        { key: "swimmingPool", field: "sacurao_auzi" },
        { key: "centralHeating", field: "centraluri_gatboba" },
        { key: "washer", field: "samrecxao_otaxi" },
        { key: "gym", field: "sportuli_darbazi" },
        { key: "alarm", field: "signalizacia" },
        { key: "tvCable", field: "televizia_wifi" },
        { key: "microwave", field: "mikrotalguri" },
      ];
  
      const matchesCheckboxes = checkboxFilters.every(({ key, field }) => {
        return !filter[key] || card[field] === "true";
      });
  
      return (
        matchesPropertyStatus &&
        matchesPropertyType &&
        matchesLocation &&
        matchesBedrooms &&
        matchesBathrooms &&
        matchesArea &&
        matchesPrice &&
        matchesCheckboxes
      );
    });
  }
  
  
  
  
  
  // Helper function for normalization
  normalizeValue(value: string, mapping: { [key: string]: string[] }): string | null {
    for (const [key, synonyms] of Object.entries(mapping)) {
      if (synonyms.includes(value)) {
        return key; // Return the normalized key
      }
    }
    return value; // Return original value if no match found
  }
  
  
  
  
  
}




