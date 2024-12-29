import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  message={text:'' , validity:false , class:'' }; 
  res;
  inputs = [
    { placeholder: 'First Name', type: 'text', FormControlname: 'saxeli' },
    { placeholder: 'Last Name', type: 'text', FormControlname: 'gvari' },
    { placeholder: 'Header', type: 'text', FormControlname: 'satauri' },
    { placeholder: 'Email', type: 'email', FormControlname: 'maili' },
  ];

  contactInfo = [
    { IconLink: '../../assets/Imges/StaticImg/StaticIcons/clock.svg', text: '+456 875 369 208' },
    { IconLink: '../../assets/Imges/StaticImg/StaticIcons/envelope-fill.svg', text: 'support@findhouses.com' },
    { IconLink: '../../assets/Imges/StaticImg/StaticIcons/telephone-fill.svg', text: '8:00 a.m - 9:00 p.m' },
  ];

  form: FormGroup;

  constructor(private fb: FormBuilder , private http: HttpClient) {

    this.form = this.fb.group({
      saxeli: ['', Validators.required],
      gvari: ['', Validators.required],
      satauri: ['', Validators.required],
      maili: ['', [Validators.required, Validators.email]],
      shetyobineba: ['', Validators.required],
    });
  }

  trackByIndex(index: number): number {
    return index;
  }

  onSubmit(): void {
    
    if (this.form.valid) {
      
      this.http.post('contact.php', this.form.value).subscribe({
        next: response => {
          this.res=response;
          if (this.res.status == 'success' && this.res.message == 'shetyobineba-gaigzavna') {
            this.message.validity=true;
            this.message.text='message sent successfully';
            this.message.class='success';
          }
          console.log('Form submitted:', this.form.value  , response);
        },
        error: error => {
          this.message.validity=true;
          this.message.text='message was not sent';
          this.message.class='error';
          console.error('Error submitting form:', error , this.form.value);
          
        }
      });
    } else {
      this.message.validity=true;
      this.message.text='message was not sent , please fill in all the fields';
      this.message.class='error';
      console.error('Form is invalid');
    }
  }
}
