import { Component, HostListener } from '@angular/core';
import { NavInfoService } from '../Services/NavService/nav-info.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  scrollY: number=0
LogoLink='../../assets/Imges/NavImg/NavIcon1.svg'
GlobeLink='../../assets/Imges/NavImg/thirdImg.png'
  ShowImg=false;
NavElements:any
IsSignedIn

  constructor(private navService: NavInfoService){
this.IsSignedIn=this.navService.IsSignedIn;
this.NavElements=this.navService.MenuBar
console.log(this.NavElements.Home)
  }
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {  

      this.scrollY = window.scrollY || window.pageYOffset; // Get the current scroll position

      if(this.scrollY>100){
        this.LogoLink='../../assets/Imges/NavImg/NavIcon2.svg'
        this.GlobeLink='../../assets/Imges/NavImg/globeBlack.svg'
      }else{
        this.LogoLink='../../assets/Imges/NavImg/NavIcon1.svg'
        this.GlobeLink='../../assets/Imges/NavImg/thirdImg.png'
      }
  }
  
}
