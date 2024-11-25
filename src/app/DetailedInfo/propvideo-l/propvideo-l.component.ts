import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-propvideo-l',
  templateUrl: './propvideo-l.component.html',
  styleUrl: './propvideo-l.component.scss'
})
export class PropvideoLComponent {
  showCover = true; // Controls the visibility of the cover
  @ViewChild('videoPlayer') videoPlayer: any;
  // Play video and hide the cover
 
  playVideo() {
    const videoElement = this.videoPlayer.nativeElement;
   
    if (videoElement) {
   
      this.showCover = !this.showCover; // Hide the cover
      if(this.showCover){
        videoElement.pouse();
    
      }else{
        videoElement.play();
    }
  }
  }
}
