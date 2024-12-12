import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-listing',
  templateUrl: './main-listing.component.html',
  styleUrls: ['./main-listing.component.scss']
})
export class MainListingComponent {
  listingForm: FormGroup;
  imgRowlink: string[] = [];
  selectedFile: File | null = null;
  

form4Info = [
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
    formControlName: 'saabazano'
  }
];

form3Info = [
  { HeaderName: 'Address', placeHolder: 'Enter Your Address', id: 'adress', formControlName: 'mdebareoba' },
  { HeaderName: 'City', placeHolder: 'Enter Your city', id: 'City', formControlName: 'qalaqi' },
  { HeaderName: 'state', placeHolder: 'Enter Your state', id: 'state', formControlName: 'shtati' },
  { HeaderName: 'Country', placeHolder: 'Enter Your Country', id: 'country', formControlName: 'qveyana' },
  { HeaderName: 'Google Map Latitude', placeHolder: 'Google Map Latitude', id: 'mapa', formControlName: 'mapLatitude' },
  { HeaderName: 'Google Map Longitude', placeHolder: 'Google Map Longitude', id: 'mapo', formControlName: 'mapLongitude' }
];

form5Info = [
  { text: 'Air Conditioning', id: 'air', formControlName: 'kondincioneri' },
  { text: 'Swimming Pool', id: 'pool', formControlName: 'auzi' },
  { text: 'Central Heating', id: 'Heating', formControlName: 'centrluriGatboba' },
  { text: 'Laundry Room', id: 'room', formControlName: 'sarecxisotaxi' },
  { text: 'Gym', id: 'gym', formControlName: 'darbazi' },
  { text: 'Alarm', id: 'alarm', formControlName: 'magvidzara' },
  { text: 'Window Covering', id: 'window', formControlName: 'fanjrisdafarva' },
  { text: 'Refrigerator', id: 'Refrigerator', formControlName: 'macivari' },
  { text: 'TV Cable & WIFI', id: 'TV', formControlName:'televisia' },
  { text: 'Microwave', id: 'Mic', formControlName: 'microtalguri' }
];

form6Info = [
  { HeaderName: 'Name', placeHolder: 'Enter Your Name', id: 'name6', formControlName: 'saxeli' },
  { HeaderName: 'Username', placeHolder: 'Enter Your Username', id: 'Username6', formControlName: 'metsaxeli' },
  { HeaderName: 'Email', placeHolder: 'Enter Your Email', id: 'Email6', formControlName: 'emaili' },
  { HeaderName: 'Phone', placeHolder: 'Enter Your Number', id: 'Number6', formControlName: 'telephoni' }
];

  constructor(private fb: FormBuilder) {
    // Initialize the form
    this.listingForm = this.fb.group({
      satauri: ['', Validators.required],
      agwera: ['', Validators.required],
      statusi: ['', Validators.required],
      typebi: ['', Validators.required],
      otaxebi: ['', Validators.required],
      fasi: ['', Validators.required],
      area: ['', Validators.required],
      media: [null, Validators.required], // Media is required
      mdebareoba: ['', Validators.required],
      qalaqi: ['', Validators.required],
      shtati: ['', Validators.required],
      qveyana: ['', Validators.required],
      mapLatitude: ['', Validators.required],
      mapLongitude: ['', Validators.required],
      asaki: ['', Validators.required],
      sadzinebeli: ['', Validators.required],
      saabazano: ['', Validators.required],
      kondincioneri: [false],
      auzi: [false],
      centrluriGatboba: [false],
      sarecxisotaxi: [false],
      darbazi: [false],
      magvidzara: [false],
      fanjrisdafarva: [false],
      macivari: [false],
      televisia: [false],
      microtalguri: [false],//hare
      saxeli: ['', Validators.required],
      metsaxeli: ['', Validators.required],
      emaili: ['', [Validators.required, Validators.email]],
      telephoni: ['', Validators.required],
    });
  }

  // Handles file selection
  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
  
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
  
      // Validate file size (e.g., max 5MB) and type
      if (file.size > 5 * 1024 * 1024) {
        console.error('File size exceeds 5MB limit');
        input.value = ''; // Clear the input
        return;
      }
      if (!['image/jpeg', 'image/png', 'image/jpg'].includes(file.type)) {
        console.error('Invalid file type. Only JPEG, JPG, and PNG are allowed.');
        input.value = ''; // Clear the input
        return;
      }
  
      this.selectedFile = file;
      this.imgRowlink.push(URL.createObjectURL(file)); // Generate preview URL
      this.listingForm.patchValue({ media: file });
      console.log('Selected File:', file);
    } else {
      console.log('No file selected');
    }
  }
  
  // Handles form submission
  onSubmit(): void {
    if (!this.selectedFile) {
      this.listingForm.get('media')?.setErrors({ required: true });
      console.error('No file selected');
      return;
    }
 console.log('Form Data:', this.listingForm.value);
    if (this.listingForm.valid) {
      const formData = new FormData();

      // Append form fields to FormData
      Object.keys(this.listingForm.controls).forEach((key) => {
        const value = this.listingForm.get(key)?.value;
        if (key === 'media' && this.selectedFile) {
          formData.append(key, this.selectedFile);
        } else if (value !== null && value !== undefined) {
          formData.append(key, value);
        }
      });

      console.log('Form Data:', formData);
      // Uncomment and update the endpoint for actual submission
      // this.http.post('https://your-api-endpoint.com/submit', formData).subscribe(
      //   response => console.log('Form submitted successfully:', response),
      //   error => console.error('Error submitting form:', error)
      // );
    } else {
      console.error('Form is invalid', this.listingForm.errors);
    }
  }
}
