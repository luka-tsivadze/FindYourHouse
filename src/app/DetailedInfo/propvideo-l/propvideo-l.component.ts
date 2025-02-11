import { Component, ViewChild } from '@angular/core';
import { PropertyInformationService } from '../../Services/Property-info/property-information.service';
import { LanguageChooserService } from '../../Services/language-chooser/language-chooser.service';

@Component({
  selector: 'app-propvideo-l',
  templateUrl: './propvideo-l.component.html',
  styleUrl: './propvideo-l.component.scss'
})
export class PropvideoLComponent {
  showCover = true; // Controls the visibility of the cover
  @ViewChild('videoPlayer') videoPlayer: any;
  // Play video and hide the cover
videoLink=this.propertyService.chosenCard.videoLink;
propvideo='Property Video';
 constructor( private propertyService:PropertyInformationService,private lang:LanguageChooserService) {
    this.propvideo=this.lang.chosenLang.DetailedInfo.propvideo;

 }
  playVideo() {
    const videoElement = this.videoPlayer.nativeElement;
   console.log('videurl', this.videoLink);
    if (videoElement) {
   
      this.showCover = !this.showCover; // Hide the cover
      if(this.showCover){
        videoElement.pause();
    
      }else{
        videoElement.play();
    }
  }
  }
}
