import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { LanguageChooserService } from '../../../Services/language-chooser/language-chooser.service';
import { HttpClient } from '@angular/common/http';
import { NavInfoService } from '../../../Services/NavService/nav-info.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrl: './upload-image.component.scss'
})
export class UploadImageComponent {
  UserMessage={text:'Your Information has been updated successfully',error:false , fileSelected:false};
imgUrl={url:'', showImg:false };
Form:FormGroup ;
  selectedFile!: File;
constructor(private langServ:LanguageChooserService , private fb:FormBuilder , private http:HttpClient , private navServ:NavInfoService) {
  this.Form=this.fb.group({
    foto:new FormControl(null),
    momxmareblis_idi:new FormControl('')
  });
}
submit(){
this.Form.get('momxmareblis_idi')?.setValue(this.navServ.userId);
if(this.Form.get('foto')?.value){
const formData = new FormData();
formData.append('foto', this.Form.get('foto')?.value);
formData.append('momxmareblis_id', this.Form.get('momxmareblis_idi')?.value);
console.log(formData);
  this.http.post('change_profile_image.php', formData ).subscribe({
    next: data => {
      console.log(data);
    },
    error: error => {
      console.error('There was an error!', error);
    }
  });
  
}
}

  onFileSelected(event: any) {
    this.UserMessage.fileSelected=true;
    const file = event.target.files[0]; 
    if (file && file.type.startsWith('image/')) { // Check if the file is an image
      this.Form.get('foto')?.setValue(file); 
      this.UserMessage.error=false;
      this.UserMessage.text='Your Information has been updated successfully Click save to save changes';
      this.imgUrl.url=URL.createObjectURL(file);
      this.imgUrl.showImg=true;

    } else {
      this.UserMessage.error=true;
      this.UserMessage.text='Only image files are allowed. upload Failed';
      alert('Only image files are allowed.');
      this.Form.get('foto')?.setValue(null); 
    }
  }
}
