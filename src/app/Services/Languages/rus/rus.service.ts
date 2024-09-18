import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RusService {

NavR={Home:'Home' , Listing:'Список',
  Property:' недвижимость', Pages:'Страницы',Blog:'Блог',
  Contact:'Контакт',SignIn:'Регистрация', AddListing:'Добавить запись'
}
  constructor() { }
}
