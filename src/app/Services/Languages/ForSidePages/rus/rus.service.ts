import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RusService {
  allForms={
 
    form1info : {
      HeaderName1: 'Описание недвижимости и цена',
      firstTitle: 'Заголовок недвижимости',
      firstplaceHolder: 'Введите заголовок вашей недвижимости',
    
      secondTitle: 'Описание недвижимости',
      secondplaceHolder: 'Опишите вашу недвижимость',
    
      firstselectName: 'Выберите статус',
      firstselect:['На продажу', 'В аренду', 'Залог','сдаётся посуточно','Квартиры в строящемся доме'],
    
      secondselectName: 'Типы недвижимости',
      secondselect:['Квартира', 'Дом', 'Коммерческая недвижимость', 'Гараж'],
    
      thirdselectName: 'Комнаты',
    
      thirdTitle: 'Цена',
      fourthTitle:'Площадь',
    
      HeaderName2: 'Фотографии недвижимости',
      HeaderName3: 'Видео недвижимости',
      HeaderName4:'План этажа',
      HeaderName5:'Местоположение недвижимости',
      HeaderName6:'Дополнительная информация',
      HeaderName7:'Особенности недвижимости',
      HeaderName8:'Контактная информация',
      submit:'Отправить недвижимость'
    },
    
    form4Info : [
      {
        id: 'Age',
        FormControlName: 'asaki',
        firstOption: 'Выберите возраст',
        options: ['0-1 год', '0-5 лет', '0-10 лет', '0-15 лет', '0-20 лет', '0-50 лет', '50+ лет'],
        formControlName: 'asaki'
      },
      {
        id: 'badrooms',
        firstOption: 'Спальни',
        options: ['1', '2', '3', '4', '5', '6'],
        formControlName: 'sadzinebeli'
      },
      {
        id: 'bathroom',
        firstOption: 'Санузлы',
        options: ['1', '2', '3', '4', '5', '6'],
        formControlName: 'sveli_wertilebis_raodenoba'
      }
    ],
    
    form3Info : [
      { HeaderName: 'Адрес', placeHolder: 'Введите ваш адрес', id: 'adress', formControlName: 'misamarti' , type:'number'},
      { HeaderName: 'Город', placeHolder: 'Введите ваш город', id: 'City', formControlName: 'qalaqi' , type:'number'},
    
      { HeaderName: 'Широта Google Map', placeHolder: 'Широта Google Map', id: 'mapa', formControlName: 'mapis_grdzedi' ,type:'number' },
      { HeaderName: 'Долгота Google Map', placeHolder: 'Долгота Google Map', id: 'mapo', formControlName: 'mapis_ganedi' , type:'text' }
    ],
    
    form5Info : [
      { text: 'Кондиционер', id: 'air', formControlName: 'kondincioneri' },
      { text: 'Бассейн', id: 'pool', formControlName: 'sacurao_auzi' },
      { text: 'Центральное отопление', id: 'Heating', formControlName: 'centrluri_gatboba' },
      { text: 'Прачечная', id: 'room', formControlName: 'samrecxao_otaxi' },
      { text: 'Тренажерный зал', id: 'gym', formControlName: 'sportuli_darbazi' },
      { text: 'Сигнализация', id: 'alarm', formControlName: 'signalizacia' },
      { text: 'Балкон', id: 'balcon', formControlName: 'aivani' },
      { text: 'Холодильник', id: 'Refrigerator', formControlName: 'macivari' },
      { text: 'ТВ и Wi-Fi', id: 'TV', formControlName:'televizia_wifi' },
      { text: 'Микроволновка', id: 'Mic', formControlName: 'microtalguri' }
    ],
    
    form6Info : [
      { HeaderName: 'Имя', placeHolder: 'Введите ваше имя', id: 'name6', formControlName: 'momxmareblis_saxeli' },
    
      { HeaderName: 'Электронная почта', placeHolder: 'Введите ваш email', id: 'Email6', formControlName: 'el_fosta' },
      { HeaderName: 'Телефон', placeHolder: 'Введите ваш номер', id: 'Number6', formControlName: 'telefonis_nomeri' }
    ]
  }
  
  LeftInfo = [
    {icon: '../../../assets/Imges/StaticImg/StaticIcons/Location.svg', Text: 'Панель управления', upText: 'Dashboard'},
    {icon: '../../../assets/Imges/StaticImg/StaticIcons/person-fill.svg', Text: 'Профиль', upText: 'Profile'},
    {icon: '../../../assets/Imges/StaticImg/StaticIcons/list.svg', Text: 'Моя недвижимость', upText: 'My Properties'},
    
    {icon: '../../../assets/Imges/StaticImg/StaticIcons/heart-fill.svg', Text: 'Избранная недвижимость', upText: 'Favorited Properties'},
    {icon: '../../../assets/Imges/StaticImg/StaticIcons/list.svg', Text: 'Добавить недвижимость', upText: 'Add Property'},
    {icon: '../../../assets/Imges/StaticImg/StaticIcons/credit-card-fill.svg', Text: 'Платежи', upText: 'Payments'},
    
    {icon: '../../../assets/Imges/StaticImg/StaticIcons/lock-fill.svg', Text: 'Изменить пароль', upText: 'Change Password'},
    {icon: '../../../assets/Imges/StaticImg/StaticIcons/log-out.svg', Text: 'Выйти', upText: 'Log Out'}
  ]
  

  constructor() { }
}
