import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { AllCardsService } from '../Services/all-cards/all-cards.service';
import { Router } from 'express';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {

  loaded = false;



    ngAfterViewInit() {

    }
}
