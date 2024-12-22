import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavInfoService } from '../../Services/NavService/nav-info.service';
import { GeoService } from '../../Services/Languages/geo/geo.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-main-listing',
  templateUrl: './main-listing.component.html',
  styleUrls: ['./main-listing.component.scss']
})
export class MainListingComponent {
  listingForm: FormGroup;
  imgRowlink: string[] = [];
  videoRowlink: string = null;
  selectedFile: File | null = null;
  binisNaxazi: string = null;
fotofiles:File[]=[];
maxFiles = 7;
index=0;

allForms={
 
form1info : {
  HeaderName1: 'Property description and price',
  firstTitle: 'Property title',
  firstplaceHolder: 'Enter your property title',

secondTitle: 'Property description',
secondplaceHolder: 'describe your property',

firstselectName: 'Select Status',
firstselect:['For Sale', 'For Rent'],

secondselectName: 'Property Types',
secondselect:['Apartment', 'House', 'Commercial', 'Garage'],

thirdselectName: 'Rooms',

thirdTitle: 'Price',
fourthTitle:'area',

HeaderName2: 'Property Pictures',
HeaderName3: 'Property Video',
HeaderName4:'Floor Plan',
HeaderName5:'Property Location',
HeaderName6:'Extra Information',
HeaderName7:'Propert Features',
HeaderName8:'Contact Information',
submit:'Submit Property'
},

form4Info : [
  {
    id: 'Age',
    FormControlName: 'asaki',
    firstOption: 'Select Age',
    options: ['0-1 Years', '0-5 Years', '0-10 Years', '0-15 Years', '0-20 Years', '0-50 Years', '50+ Years'],
    formControlName: 'asaki'
  },
  {
    id: 'badrooms',
    firstOption: 'Bedrooms',
    options: ['1', '2', '3', '4', '5', '6'],
    formControlName: 'sadzinebeli'
  },
  {
    id: 'bathroom',
    firstOption: 'Bathrooms',
    options: ['1', '2', '3', '4', '5', '6'],
    formControlName: 'sveli_wertilebis_raodenoba'
  }
],

form3Info : [
  { HeaderName: 'Address', placeHolder: 'Enter Your Address', id: 'adress', formControlName: 'misamarti' },
  { HeaderName: 'City', placeHolder: 'Enter Your city', id: 'City', formControlName: 'qalaqi' },


  { HeaderName: 'Google Map Latitude', placeHolder: 'Google Map Latitude', id: 'mapa', formControlName: 'mapis_grdzedi' },
  { HeaderName: 'Google Map Longitude', placeHolder: 'Google Map Longitude', id: 'mapo', formControlName: 'mapis_ganedi' }
],

form5Info : [
  { text: 'Air Conditioning', id: 'air', formControlName: 'kondincioneri' },
  { text: 'Swimming Pool', id: 'pool', formControlName: 'sacurao_auzi' },
  { text: 'Central Heating', id: 'Heating', formControlName: 'centrluri_gatboba' },
  { text: 'Laundry Room', id: 'room', formControlName: 'samrecxao_otaxi' },
  { text: 'Gym', id: 'gym', formControlName: 'sportuli_darbazi' },
  { text: 'Alarm', id: 'alarm', formControlName: 'signalizacia' },
  { text: 'balcony', id: 'balcon', formControlName: 'aivani' },
  { text: 'Refrigerator', id: 'Refrigerator', formControlName: 'macivari' },
  { text: 'TV Cable & WIFI', id: 'TV', formControlName:'televizia_wifi' },
  { text: 'Microwave', id: 'Mic', formControlName: 'microtalguri' }
],

form6Info : [
  { HeaderName: 'Name', placeHolder: 'Enter Your Name', id: 'name6', formControlName: 'momxmareblis_saxeli' },

  { HeaderName: 'Email', placeHolder: 'Enter Your Email', id: 'Email6', formControlName: 'el_fosta' },
  { HeaderName: 'Phone', placeHolder: 'Enter Your Number', id: 'Number6', formControlName: 'telefonis_nomeri' }
]
}

  constructor(private fb: FormBuilder , private http: HttpClient ,private navservice: NavInfoService ,private geo: GeoService) { 
    // Initialize the form
    this.listingForm = this.fb.group({
      satauri: ['', Validators.required],
      mokle_agwera: ['', Validators.required],
      garigebis_tipi: ['', Validators.required],
      tipi: ['', Validators.required],
      otaxebis_raodenoba: ['', Validators.required],
      fasi: [' '+'₾', Validators.required],
      fasis_valuta:['₾'],
      fartobi: ['', Validators.required],
      fotoebi: [null, Validators.required],
      video: [null, Validators.required], 
      binis_naxazi: ['', Validators.required],
      misamarti: ['', Validators.required],
      qalaqi: ['', Validators.required],
      mapis_grdzedi: ['', Validators.required],
      mapis_ganedi: ['', Validators.required],
      asaki: ['', Validators.required],
      sadzinebeli: ['', Validators.required],
      sveli_wertilebis_raodenoba : ['', Validators.required],
      kondincioneri: [false],
      sacurao_auzi: [false],
      statusis_fasi: [''],
      statusis_chartvis_dro: [''],
      centrluri_gatboba: [false],
      samrecxao_otaxi: [false],
      sportuli_darbazi: [false],
      signalizacia: [false],
      aivani: [false],
      macivari: [false],
      televizia_wifi: [false],
      microtalguri: [false],
      momxmareblis_saxeli: ['', Validators.required],
      telefonis_nomeri: ['', Validators.required],
      el_fosta: ['', [Validators.required, Validators.email]],
      gancxadebis_moqmedebis_vada: ['1'],
      amtvirtvelis_maili: [''],
      id : ['']
    });
  }

  // Handles file selection
  onFileChange(event: Event, type: 'image' | 'video' | 'image1'): void {
    const input = event.target as HTMLInputElement;
  

    if (input.files && input.files.length > 0) {


      const files = input.files;
  
      // Validate file size
      const maxSize = type === 'image' || type === 'image1' ? 5 * 1024 * 1024 : 50 * 1024 * 1024;
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
      if (file.size > maxSize) {
        console.error(`File size exceeds ${maxSize / (1024 * 1024)}MB limit`);
        input.value = ''; // Clear the input
        return;
      }
  
      // Validate file type
      let validTypes: string[];
      if (type === 'image' || type === 'image1') {
        validTypes = ['image/jpeg', 'image/png', 'image/jpg'];
      } else if (type === 'video') {
        validTypes = ['video/mp4', 'video/avi', 'video/mkv'];
      } else {
        console.error('Invalid type specified');
        input.value = ''; // Clear the input
        return;
      }
  
      if (!validTypes.includes(file.type)) {
        console.error(`Invalid file type. Only ${validTypes.join(', ')} are allowed.`);
        input.value = ''; // Clear the input
        return;
      }
  
      // Handle file assignment and preview URL generation
      this.selectedFile = file;
      if (type === 'image') {

        console.log(this.index)
        if(this.index>this.maxFiles-1){
          console.log('Max files reached');
          return;
        }else{
          this.index++;
          this.fotofiles.push(file);
          this.imgRowlink.push(URL.createObjectURL(file));
          this.listingForm.patchValue({ fotoebi: this.fotofiles });
        }
      } else if (type === 'video') {
        this.listingForm.patchValue({ video: file });
        this.videoRowlink = URL.createObjectURL(file);
      } else if (type === 'image1') {
        this.listingForm.patchValue({binis_naxazi: file });
        this.binisNaxazi = URL.createObjectURL(file);
      }
  
    }
      // Reset input to allow re-selection of the same file
      input.value = '';
    } else {
      console.log('No file selected');
    }
  }
  
  
  remover(inputElement?: HTMLInputElement): void {
    this.videoRowlink = null;
    this.listingForm.patchValue({ video: null });
  
    // Reset the file input element to allow re-upload of the same file
    if (inputElement) {
      inputElement.value = '';
    }
  }
  imgremover(index: number): void {
    this.index-=1;
    console.log('Removing image at index:', index);
    this.imgRowlink.splice(index, 1);
    this.fotofiles.splice(index, 1);
    this.listingForm.patchValue({ fotoebi: this.fotofiles });
  }
  mainimg(index: number){
    console.log('Removing image at index:', index);
    
    this.listingForm.patchValue({ fotoebi: this.fotofiles });
  }
  
  
  
  
  // Handles form submission
  onSubmit(): void {
    // Ensure a file has been selected if required
    if (!this.selectedFile && (!this.imgRowlink.length && !this.videoRowlink)) {
      console.error('No file selected');
      return;
    }

    
     this.listingForm.patchValue({ statusis_chartvis_dro: new Date().toISOString().split('T')[0] });
     this.listingForm.patchValue({ statusis_fasi: 'it is not added yet 1' });
      this.listingForm.patchValue({ amtvirtvelis_maili: this.navservice.IsSignedIn.email });
      this.listingForm.patchValue({ id: localStorage.getItem('id')});
      const fasiValue = this.listingForm.get('fasi')?.value;
      const currencies = ['₾', '$', '€'];
      const foundCurrencies = currencies.filter(currency => fasiValue.includes(currency));

      if (foundCurrencies.length > 1) {
        console.error('Multiple currencies detected');
        this.listingForm.setErrors({ multipleCurrencies: true });
        return;
      }

      if (foundCurrencies.length === 1) {
        const currency = foundCurrencies[0];
        const amount = fasiValue.replace(currency, '').trim();
        this.listingForm.patchValue({ fasi: amount, fasis_valuta: currency });
      } else {

        this.listingForm.patchValue({ fasis_valuta: '₾' });
      }
   
    // Log the form data for debugging
    console.log('Form Value Before Submission:', this.listingForm.value);
  
    if (this.listingForm.valid) {
      const formData = new FormData();
  
      // Append all form controls to the FormData
      Object.keys(this.listingForm.controls).forEach((key) => {
        const value = this.listingForm.get(key)?.value;
        if (value !== null && value !== undefined) {
          // Handle arrays (e.g., imgRowlink) separately if needed
          if (Array.isArray(value)) {
            value.forEach((item, index) => {
              formData.append(`${key}[${index}]`, item);
            });
          } else {
            formData.append(key, value);
          }
        }
      });
      

      // Submit the form data to the backend
      this.http.post('upload_house.php', formData).subscribe({
        next: (response) => console.log('Form submitted successfully:', response),
        error: (error) => console.error('Error submitting form:', error),
        complete: () => console.log('Form submission completed')
      });
    }else{
      console.log('Form is invalid');
    }
      
  }      
}    
