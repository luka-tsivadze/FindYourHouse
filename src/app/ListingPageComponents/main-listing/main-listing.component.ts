import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavInfoService } from '../../Services/NavService/nav-info.service';
import { GeoService } from '../../Services/Languages/geo/geo.service';
import { first } from 'rxjs';
import { log } from 'node:console';

@Component({
  selector: 'app-main-listing',
  templateUrl: './main-listing.component.html',
  styleUrls: ['./main-listing.component.scss']
})
export class MainListingComponent {
  listingForm: FormGroup;
  ResponseText;
  SendingAnimation = false;
  imgRowlink: string[] = [];
  videoRowlink: string = null;
  selectedFile: File | null = null;
  binisNaxazi = null;
fotofiles:File[]=[];
videoFiles:File[]=[];
naxaziFiles:File[]=[];

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
firstselect:['For Sale', 'For Rent', 'Pledge','rented daily','Apartments under construction'],

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
  { HeaderName: 'Address', placeHolder: 'Enter Your Address', id: 'adress', formControlName: 'misamarti' , type:'text'},
  { HeaderName: 'City', placeHolder: 'Enter Your city', id: 'City', formControlName: 'qalaqi' , type:'text'},


  { HeaderName: 'Google Map Latitude', placeHolder: 'Google Map Latitude', id: 'mapa', formControlName: 'mapis_grdzedi' ,type:'number' },
  { HeaderName: 'Google Map Longitude', placeHolder: 'Google Map Longitude', id: 'mapo', formControlName: 'mapis_ganedi' , type:'text' }
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
name;

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
      video: [null,], 
      binis_naxazi: [null, ],
      misamarti: ['', Validators.required],
      qalaqi: ['', Validators.required],
      mapis_grdzedi: ['',],
      mapis_ganedi: ['', ],
      asaki: ['', Validators.required],
      sadzinebeli: ['', Validators.required],
      sveli_wertilebis_raodenoba : ['', Validators.required],
      kondincioneri: [false],
      sacurao_auzi: [false],
  
  
      
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

      amtvirtvelis_maili: [''],
      id : ['']
    });
  }

  // Handles file selection
 
  
  
  
  
  remover(inputElement?: HTMLInputElement): void {
    this.videoRowlink = null;
    this.listingForm.patchValue({ video: null });
  
    // Reset the file input element to allow re-upload of the same file
    if (inputElement) {
      inputElement.value = '';
    }
  }
  imgremover(index: number ,mainimg): void {
    if(mainimg){
    
    }else{ 
      this.index-=1;
    }
      
      this.imgRowlink.splice(index, 1);
      this.fotofiles.splice(index, 1);
      this.listingForm.patchValue({ fotoebi: this.fotofiles });
  }
  mainimg(index: number){

   this.fotofiles.unshift(this.fotofiles[index]);
   this.imgRowlink.unshift(this.imgRowlink[index]);
    this.imgremover(index+1, true);
    
    this.listingForm.patchValue({ fotoebi: this.fotofiles });
  }
  
  
  
  
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
        let validTypes: string[] = [];
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
        
        // Handle file assignment
        if (type === 'image') {
          if (this.index >= this.maxFiles) {
            console.log('Max files reached');
            return;
          } else {
            this.index++;
            this.fotofiles.push(file);
            this.imgRowlink.push(URL.createObjectURL(file));
            this.listingForm.patchValue({ fotoebi: this.fotofiles });
          }
        } else if (type === 'video') {
          this.videoFiles = [file];
          this.listingForm.patchValue({ video: this.videoFiles });
          this.videoRowlink = URL.createObjectURL(file);
        } else if (type === 'image1') {
          this.naxaziFiles = [file];
          this.listingForm.patchValue({ binis_naxazi: this.naxaziFiles });
          this.binisNaxazi = URL.createObjectURL(file);
        }
      }
      input.value = ''; // Reset input to allow re-selection
    } else {
      console.log('No file selected');
    }
  }
  
  onSubmit(): void {
    if (!this.selectedFile && (!this.imgRowlink.length && !this.videoRowlink)) {
      console.error('No file selected');
      return;
    }
    this.SendingAnimation = true;
    
      this.listingForm.patchValue({id: this.navservice.userId});
  this.listingForm.patchValue({amtvirtvelis_maili: this.navservice.IsSignedIn.email});
    // Check if the 'fasi' value contains any currency symbol and remove it
    const currencySymbols = ['₾', '$', '€'];
    let fasiValue = this.listingForm.value.fasi;
    let fasiValuta = this.listingForm.value.fasis_valuta;

    currencySymbols.forEach(symbol => {
      if (fasiValue.includes(symbol)) {
      fasiValue = fasiValue.replace(symbol, '').trim();
      fasiValuta = symbol;
      }
    });

    this.listingForm.patchValue({ fasi: fasiValue, fasis_valuta: fasiValuta });
  
    const formData = new FormData();
  
    // Add all form fields
    const formFields = this.listingForm.value;
    Object.keys(formFields).forEach((key) => {
      const value = formFields[key];
      if (value !== null && value !== undefined) {
        formData.append(key, value);
      }
    });
  
    // Append files
    this.fotofiles.forEach((file) => {
      formData.append('fotoebi[]', file);
    });
    this.videoFiles.forEach((file) => {
      formData.append('video[]', file);
    });
    this.naxaziFiles.forEach((file) => {
      formData.append('binis_naxazi[]', file);
    });

    console.log('FormData to Submit:', formData , this.listingForm.value);
  
    this.http.post('upload_house.php', formData).subscribe({
      next: (response: any) => {
        console.log('Form submitted successfully:', response);
        
        if (response.status === 'success' && response.message === 'gancxadeba-aitvirta-warmatebit') {
          window.location.href = '/allCards';
          this.SendingAnimation = false;
          alert('Form submitted successfully');
        } else {
          this.SendingAnimation = false
          console.error('Error:', response.message , response);
        }
      },
      error: (error) => {
        console.error('Error submitting form:', error);
      },
      complete: () => console.log('Form submission completed'),
    });
  }
  

   

  
  
       
}    
