import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavInfoService } from '../../Services/NavService/nav-info.service';

import { LanguageChooserService } from '../../Services/language-chooser/language-chooser.service';
import { ListingServiceService } from '../../Services/listing-service/listing-service.service';
import { MainPageDataService } from '../../Services/mainPageService/main-page-data.service';

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
editItemId: number | null = null;
maxFiles = 7;
index=0;

calledFromEdit = false;
isLoadingFiles = true;
allForms=this.lang.chosenLang.allForms;
city={
  input:this.lang.chosenLang.allForms.City, 
  options:{optDis:this.mainServ.LangMainData.allFilter.FirstFilter.locationDis ,optValue:this.mainServ.LangMainData.allFilter.FirstFilter.locations}};
name;

  constructor( private sharedService:ListingServiceService,  private fb: FormBuilder , private cd: ChangeDetectorRef ,
    private http: HttpClient ,private navservice: NavInfoService ,private lang:LanguageChooserService ,private mainServ:MainPageDataService) { 
     //post api request should be in service not here
  
    this.listingForm = this.fb.group({
      satauri: ['', Validators.required],
      mokle_agwera: ['', Validators.required],
      gancxadebis_id: [''],
      garigebis_tipi: ['', Validators.required],
      tipi: ['', Validators.required],
      otaxebis_raodenoba: ['', Validators.required],
      fasi: [' '+'₾'+ ' ', [Validators.required, Validators.maxLength(8)]],
      fasis_valuta:['₾'],
      fartobi: [null,[Validators.required, Validators.maxLength(8)]],
      fotoebi: [null, Validators.required],
      video: ['',], 
      binis_naxazi: ['', ],
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
      momxmareblis_saxeli: [this.navservice.IsSignedIn.Name, Validators.required],
      telefonis_nomeri: [this.navservice.IsSignedIn.number, Validators.required],
      el_fosta: [this.navservice.IsSignedIn.email, [Validators.required, Validators.email]],
      amtvirtvelis_maili: [''],
      id : ['']
    });
 
  }

  // Handles file selection
 
  
  ngOnInit(): void {
    // Subscribe to get the ID of the item being edited
    this.sharedService.editItemId$.subscribe((id) => {
      this.editItemId = id;
      if (this.editItemId !== null) {
        this.loadItemData(this.editItemId);
      }
    });
  }

  async loadItemData(data) {
    console.log('Loading item data:', data);
    this.calledFromEdit = true;
    this.isLoadingFiles = true; // ✅ Start loading
  
    try {
      // ✅ Convert images
      const images = data.additionalInfo.fotoebi ? JSON.parse(data.additionalInfo.fotoebi) : [];
      this.imgRowlink = images.map((img) => `houses/${data.additionalInfo.amtvirtvelis_maili}/${data.additionalInfo.gancxadebis_saidentifikacio_kodi}/photos/${img}`);
      this.index = this.imgRowlink.length;
  
      // Convert images in parallel
      const imageFilesPromise = Promise.all(
        this.imgRowlink.map((link, i) => this.urlToFile(link, `image${i + 1}.jpg`, 'image/jpeg'))
      );
  
      // ✅ Convert video (process in parallel)
      const videoArray = data.additionalInfo.video ? JSON.parse(data.additionalInfo.video) : [];
      const video = videoArray[0];
      this.videoRowlink = video ? `houses/${data.additionalInfo.amtvirtvelis_maili}/${data.additionalInfo.gancxadebis_saidentifikacio_kodi}/video/${video}` : null;
  
      const videoFilePromise = this.videoRowlink
        ? this.urlToFile(this.videoRowlink, 'video.mp4', 'video/mp4')
        : null;
  
      // ✅ Convert blueprint (binis_naxazi) (process in parallel)
      const naxaziArray = data.additionalInfo.binis_naxazi ? JSON.parse(data.additionalInfo.binis_naxazi) : [];
      const naxazi = naxaziArray[0];
      this.binisNaxazi = naxazi ? `houses/${data.additionalInfo.amtvirtvelis_maili}/${data.additionalInfo.gancxadebis_saidentifikacio_kodi}/blueprints/${naxazi}` : null;
  
      const naxaziFilePromise = this.binisNaxazi
        ? this.urlToFile(this.binisNaxazi, 'blueprint.jpg', 'image/jpeg')
        : null;
  
      // ✅ Wait for all file conversions to complete in parallel
      this.fotofiles = await imageFilesPromise;
      this.videoFiles = videoFilePromise ? [await videoFilePromise] : [];
      this.naxaziFiles = naxaziFilePromise ? [await naxaziFilePromise] : [];
  
      // ✅ Now update the form after all files are processed
      if (data) {
        this.listingForm.patchValue({
          satauri: data.title,
          gancxadebis_id: data.id,
          id: this.navservice.userId,
          mokle_agwera: data.additionalInfo.mokle_agwera,
          garigebis_tipi: data.additionalInfo.garigebis_tipi,
          tipi: data.additionalInfo.tipi,
          otaxebis_raodenoba: data.additionalInfo.otaxebis_raodenoba,
          fasi: data.additionalInfo.fasi,
          fasis_valuta: data.additionalInfo.fasis_valuta,
          fartobi: data.additionalInfo.fartobi,
          fotoebi: this.fotofiles,
          misamarti: data.location,
          qalaqi: data.additionalInfo.qalaqi,
          mapis_grdzedi: data.additionalInfo.mapis_grdzedi,
          mapis_ganedi: data.additionalInfo.mapis_ganedi,
          asaki: data.additionalInfo.asaki,
          sadzinebeli: data.additionalInfo.sadzinebeli,
          sveli_wertilebis_raodenoba: data.additionalInfo.sveli_wertilebis_raodenoba,
          kondincioneri: data.additionalInfo.kondincioneri || false,
          sacurao_auzi: data.additionalInfo.sacurao_auzi || false,
          centrluri_gatboba: data.additionalInfo.centrluri_gatboba || false,
          samrecxao_otaxi: data.additionalInfo.samrecxao_otaxi || false,
          sportuli_darbazi: data.additionalInfo.sportuli_darbazi || false,
          signalizacia: data.additionalInfo.signalizacia || false,
          aivani: data.additionalInfo.aivani || false,
          macivari: data.additionalInfo.macivari || false,
          televizia_wifi: data.additionalInfo.televizia_wifi || false,
          microtalguri: data.additionalInfo.microtalguri || false,
          momxmareblis_saxeli: data.additionalInfo.momxmareblis_saxeli,
          telefonis_nomeri: data.additionalInfo.telefonis_nomeri,
          el_fosta: data.additionalInfo.el_fosta,
          amtvirtvelis_maili: data.additionalInfo.amtvirtvelis_maili,
        });
      }
    } catch (error) {
      console.error('Error loading item data:', error);
    } finally {
      // ✅ Ensure `isLoadingFiles` is always set to false, even if an error happens
      this.isLoadingFiles = false;
    }
  }
  
  // ✅ Helper function remains unchanged
  async urlToFile(url: string, filename: string, p0: string): Promise<File> {
    const response = await fetch(url);
    const blob = await response.blob();
    const detectedMimeType = blob.type;
  
    console.log(`Converted file from URL: ${filename}, Detected MIME type: ${detectedMimeType}`);
  
    // Force correct MIME type if necessary
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    const forcedMimeType = allowedTypes.includes(detectedMimeType) ? detectedMimeType : 'image/jpeg';
  
    return new File([blob], filename, { type: forcedMimeType });
  }
  
  

    
  
  
  
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
    console.log('index',index);
      
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
          alert(`File size exceeds ${maxSize / (1024 * 1024)}MB limit`);
          input.value = ''; // Clear the input
          return;
        }
  
        // Validate file type
        let validTypes: string[] = [];
        if (type === 'image' || type === 'image1') {
          validTypes = ['image/jpeg', 'image/png', 'image/jpg' , 'image/webp'];
        } else if (type === 'video') {
          validTypes = ['video/mp4', 'video/avi', 'video/mkv','video/webm'];
        } else {
          alert('Invalid file type');
          input.value = ''; // Clear the input
          return;
        }
        
        if (!validTypes.includes(file.type)) {
          alert(`Invalid file type. Only ${validTypes.join(', ')} are allowed.`);
          input.value = ''; // Clear the input
          return;
        }
        
        // Handle file assignment
        if (type === 'image') {
          if (this.index >= this.maxFiles) {
            
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
    if (this.listingForm.invalid) {
      console.error('Invalid form:', this.listingForm.value);
      this.scrollToFirstInvalidControl();
      return;
    }
    console.log(this.listingForm.value);
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


    this.http.post('upload_house.php', formData).subscribe({
      next: (response: any) => {
        console.log('Form submitted successfully:', response);
        
        if (response.status === 'success' && response.message === 'gancxadeba-aitvirta-warmatebit') {
          
          if(this.calledFromEdit){
            console.log('Edit mode', this.listingForm.value);  

            this.sharedService.DeleteItem(this.listingForm.value.gancxadebis_id).subscribe();
           }          
          this.SendingAnimation = false;
          window.location.href = '/allCards';


        } else {
          this.SendingAnimation = false
          console.error('Error:', response.message , response);
        }
      },
      error: (error) => {
        console.error('Error submitting form:', error);
      },
  
    });
  }
  
  private scrollToFirstInvalidControl(): void {
    
    for (const key of Object.keys(this.listingForm.controls)) {
      if (this.listingForm.controls[key].invalid) {
        const invalidControl = document.getElementById(key);
        if (invalidControl) {
          invalidControl.scrollIntoView({ behavior: 'smooth', block: 'center' });
          invalidControl.focus();
        }
        break; // Stop after the first invalid control is found
      }
    }
  }
   

  
  
       
}    
