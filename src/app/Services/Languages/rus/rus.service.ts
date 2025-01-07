import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RusService {

NavR={Home:'дом' ,
  Property:' недвижимость', Pages:'Страницы',Blog:'Блог',
  Contact:'Контакт',SignIn:'Регистрация', AddListing:'Добавить запись'
}
Header = {
  FindYourHouse: 'Найди свою мечту ',
  weHaveOverMillion: 'У нас есть более миллиона объектов недвижимости для вас',

  status:['На продажу','В аренду','Приносить присягу','Арендуется посуточно','Квартиры в стадии строительства'],
  location: 'Местоположение',
  KayWord: 'Введите ключевое слово..',
  propertyType: 'Тип недвижимости',
  Advanced: 'Расширенный поиск',
  Search: 'Искать сейчас'
}
popularPlaces={Header:'Популярные места' ,properties:' Недвижимость в самых популярных местах',prop:"свойство"}

featuredPropertiesStatic = {
  Header: 'Рекомендуемая недвижимость',
  properties: 'Недвижимость в самых популярных местах',
  featured: 'Рекомендуемая',
  For: 'На продажу',
  BedRooms: 'Спальни',
  BathRooms: 'Ванные комнаты',
  Garage: 'Гаражи',
  Area: 'кв. м',
  ViewDetails: 'Посмотреть детали'
}
main = {
  WhyChooseUs: 'Почему мы', 
  everyStep: 'Мы предлагаем полный сервис на каждом этапе', 
  
  popularPropertys: 'Откройте для себя популярные объекты', 
  AgentsH: 'Познакомьтесь с нашими агентами', 
  AgentsP: 'Мы всегда готовы помочь вам', 
  RHeader: 'Отзывы клиентов', 
  Rptext: 'Мы собираем отзывы от наших клиентов.'
}

SFooter = {
  headerFP: 'Наши партнеры', 
  pFP: 'Компания, представляющая наши интересы.', 
  NavFooter: 'Навигация', 
  Twiter: 'Твиттер лента', 
  NewsFooter: 'Информационная рассылка', 
  NewsFooterText: 'Подпишитесь на нашу информационную рассылку, чтобы получать последние обновления и предложения. Подпишитесь, чтобы получать новости на свою почту.', 
  NewsFooterBtn: 'ПОДПИСАТЬСЯ', 
  NewsFooterPlaceHolder: 'Введите ваш email'
}


  constructor() { }
}
