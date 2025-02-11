import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RusService {
  MenuBar = {
    Home: [  ],
    Property: [ ],
    Pages: [ 
      { a: 'Панель пользователя', Showimg: true, RouterLink: '', subText: [ {text: 'Панель управления', value: 'Dashboard'},
        { text: 'Профиль', value: 'Profile' }, {text: 'Моя собственность', value: 'My Properties'}, { text: 'Избранная собственность', value: 'Favorited Properties'},
        {text: 'Добавить собственность', value: 'Add Property'} ,{text: 'Платежи', value: 'Payments'},{text: 'Изменить пароль', value: 'Change Password'}] },
      { a: 'Войти', Showimg: false },
      { a: 'Регистрация', Showimg: false, RouterLink: ''  },
      { a: 'О нас', Showimg: false, RouterLink: '/about' },
    ],
    Blog: [ 
      { a: 'Текст', Showimg: true, subText: ['Текст 1', 'Текст 2', 'Текст 3'] },
      { a: 'Текст', Showimg: false },
      { a: 'Текст', Showimg: false }
    ],
    profileSettings: [
      { Text: 'Редактировать профиль', value: 'Edit Profile', routes: '' },
      { Text: 'Добавить недвижимость', value: 'Add Property' },
      { Text: 'Платежи', value: 'Payments' },
      { Text: 'Сменить пароль', value: 'Change Password' },
      { Text: 'Выйти', value: 'Log Out' }
    ]
    
  };
  
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
For={
  text: 'Статус недвижимости',
  optdisplay:[ 'Сдается в аренду', 'Продается', 'Залог', 'Аренда посуточно', 'Строящиеся квартиры'],
}


  constructor() { }
}
