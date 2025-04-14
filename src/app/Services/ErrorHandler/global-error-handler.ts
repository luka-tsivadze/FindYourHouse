import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { LoadingServiceService } from '../LoadingServ/loading-service.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {


  constructor(private injector: Injector) {}

  handleError(error: any): void {
    console.error('An error occurred:', error);

    const loadingService = this.injector.get(LoadingServiceService);

    // Trigger safe reload logic

    if (loadingService.loadingSubject.getValue()) {
        setTimeout(() => location.reload(), 10000);
      }
      
  }
}
