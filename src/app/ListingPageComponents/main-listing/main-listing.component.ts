import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { text } from 'stream/consumers';

@Component({
  selector: 'app-main-listing',
  templateUrl: './main-listing.component.html',
  styleUrl: './main-listing.component.scss'
})
export class MainListingComponent {

  listingForm: FormGroup= new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    rooms: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    area: new FormControl('', Validators.required),
    media: new FormControl('', Validators.required),
    // Form 3
    address: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    mapLatitude: new FormControl('', Validators.required),
    mapLongitude: new FormControl('', Validators.required),
    // Form 4
    age: new FormControl('', Validators.required),
    bedrooms: new FormControl('', Validators.required),
    bathrooms: new FormControl('', Validators.required),
    // Form 5
    airConditioning: new FormControl(false),
    swimmingPool: new FormControl(false),
    centralHeating: new FormControl(false),
    laundryRoom: new FormControl(false),
    gym: new FormControl(false),
    alarm: new FormControl(false),
    windowCovering: new FormControl(false),
    refrigerator: new FormControl(false),
    tvCableWifi: new FormControl(false),
    microwave: new FormControl(false),
    // Form 6
    name: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required)


  });

  form4Info = [
    {
      id: 'Age',
      firstOption: 'Select Age',
      options: ['0-1 Years', '0-5 Years', '0-10 Years', '0-15 Years', '0-20 Years', '0-50 Years', '50+ Years'],
      formControlName: 'age'
    },
    {
      id: 'badrooms',
      firstOption: 'Bedrooms',
      options: ['1', '2', '3', '4', '5', '6'],
      formControlName: 'bedrooms'
    },
    {
      id: 'bathroom',
      firstOption: 'Bathrooms',
      options: ['1', '2', '3', '4', '5', '6'],
      formControlName: 'bathrooms'
    }
  ];

  form3Info = [
    { HeaderName: 'Address', placeHolder: 'Enter Your Address', id: 'adress', formControlName: 'address' },
    { HeaderName: 'City', placeHolder: 'Enter Your city', id: 'City', formControlName: 'city' },
    { HeaderName: 'state', placeHolder: 'Enter Your state', id: 'state', formControlName: 'state' },
    { HeaderName: 'Country', placeHolder: 'Enter Your Country', id: 'country', formControlName: 'country' },
    { HeaderName: 'Google Map Latitude', placeHolder: 'Google Map Latitude', id: 'mapa', formControlName: 'mapLatitude' },
    { HeaderName: 'Google Map Longitude', placeHolder: 'Google Map Longitude', id: 'mapo', formControlName: 'mapLongitude' }
  ];

  form5Info = [
    { text: 'Air Conditioning', id: 'air', formControlName: 'airConditioning' },
    { text: 'Swimming Pool', id: 'pool', formControlName: 'swimmingPool' },
    { text: 'Central Heating', id: 'Heating', formControlName: 'centralHeating' },
    { text: 'Laundry Room', id: 'room', formControlName: 'laundryRoom' },
    { text: 'Gym', id: 'gym', formControlName: 'gym' },
    { text: 'Alarm', id: 'alarm', formControlName: 'alarm' },
    { text: 'Window Covering', id: 'window', formControlName: 'windowCovering' },
    { text: 'Refrigerator', id: 'Refrigerator', formControlName: 'refrigerator' },
    { text: 'TV Cable & WIFI', id: 'TV', formControlName: 'tvCableWifi' },
    { text: 'Microwave', id: 'Mic', formControlName: 'microwave' }
  ];

  form6Info = [
    { HeaderName: 'Name', placeHolder: 'Enter Your Name', id: 'name6', formControlName: 'name' },
    { HeaderName: 'Username', placeHolder: 'Enter Your Username', id: 'Username6', formControlName: 'username' },
    { HeaderName: 'Email', placeHolder: 'Enter Your Email', id: 'Email6', formControlName: 'email' },
    { HeaderName: 'Phone', placeHolder: 'Enter Your Number', id: 'Number6', formControlName: 'phone' }
  ];
constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
 
  }
  onSubmit(): void {
    if (this.listingForm.valid) {
      console.log(this.listingForm.value); // You can process the form data here
    } else {
      console.log('Form is not valid');
    }
  }
}