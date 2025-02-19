import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

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
      { HeaderName: 'Адрес', placeHolder: 'Введите ваш адрес', id: 'adress', formControlName: 'misamarti' , type:'text'},
      { HeaderName: 'Город', placeHolder: 'Введите ваш город', id: 'City', formControlName: 'qalaqi' , type:'text'},
    
      { HeaderName: 'Широта Google Map', placeHolder: 'Широта Google Map', id: 'mapa', formControlName: 'mapis_grdzedi' ,type:'number' },
      { HeaderName: 'Долгота Google Map', placeHolder: 'Долгота Google Map', id: 'mapo', formControlName: 'mapis_ganedi' , type:'number' }
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
  
  Dashboard ={
    dash_listing: {
      mainHeader: "Панель управления",
      headers: ["Название списка", "Дата", "Рейтинг", "Статус", "Редактировать"]
    },
    manage: {
      header: "Управление панелью",
      cards: [
        { title: "Опубликованная недвижимость" },
        { title: "Всего отзывов" },
        { title: "Сообщения" },
        { title: "Количество в закладках" }
      ]
    },
    DashReview: {
      header: "Обзор 4"
    },
    PersonalInfo: {
      staticElements: {
        Header: "Личная информация",
        updateBtn: "Обновите ваш пароль",
        submit: "Отправить"
      },
      inputText: [
        { labe: "Имя", placeholder: "Введите ваше имя", FormControl:'saxeli' },
        { label: "Фамилия", placeholder: "Введите вашу фамилию", FormControl:'gvari' },

        { label: "Номер телефона", placeholder: "например: +1-800-7700-00", FormControl:'phone' },
        { label: "Адрес", placeholder: "Введите ваш адрес" , FormControl:'misamarti'}
      ],
      textArea: [
        { label: "О себе", placeholder: "Напишите о себе", FormControl:'aboutYourSelf' }
      ]
    }
  }
  Profile = {
    header: "Детали профиля",
    inquary: "Запрос информации",
    submit: "Отправить запрос",
    input: ["Имя", "Номер телефона", "Электронная почта"]
  }
  ChangePassword = {
    header: 'Изменить пароль',
    pas: 'Текущий пароль',
    NewPas: 'Новый пароль',
    ConfPas: 'Подтвердите ваш пароль',
    submit: 'Отправить изменения'
  }
  myProp = {
    Header: 'Лучшие объекты',
    date: 'Дата добавления',
    Views: 'Просмотры',
    action: 'Действия',
    rew: 'Отзывы',
    Ed: 'Редактировать',
    prev: 'Предыдущий',
    next: 'Следующий',
    ago:'Месяцев назад'
  };
  
  contact = {
    staticText: {
      header: 'Контакты',
      headerH4: 'Главная  /  Контакты',
      formH3: 'Контакты',
      Mes:'Сообщение',
      sub: 'Отправить',
      cd: 'Контактные данные',
      cp: 'Пожалуйста, найдите ниже контактные данные и свяжитесь с нами сегодня!'
    },
    inputs: [
      { placeholder: 'Имя', type: 'text', FormControlname: 'saxeli' },
      { placeholder: 'Фамилия', type: 'text', FormControlname: 'gvari' },
      { placeholder: 'Заголовок', type: 'text', FormControlname: 'satauri' },
      { placeholder: 'Эл. почта', type: 'email', FormControlname: 'maili' },
    ],
  }
  About = {
    headerH2: 'О нашей компании',
    headerH4: 'Главная / О нас',
    span1: 'О нас',
    span2: 'Найти дома',
    mainText: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum odio id voluptatibus incidunt cum? Atque quasi eum debitis optio ab. Esse itaque officiis tempora possimus odio rerum aperiam ratione, sunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit sunt.`,
    btn: 'Читать далее'
  }
  DetailedInfo = {
    advertismentr: 'Специальные предложения дня',
    AgentsInfo: {
      inputs: [
        { type: 'text', placeholder: 'Имя', formControlName: 'firstName' },
        { type: 'number', placeholder: 'Номер телефона', formControlName: 'phoneNumber' },
        { type: 'email', placeholder: 'Электронная почта', formControlName: 'email' },
      ],
      staticValues: {
        h3: 'Информация об агенте',
        p: 'Агент по недвижимости',
        req: 'Отправить запрос',
        submit: 'Отправить',
        textArea: 'Сообщение',
      },
    },
    CardGallery1: 'Галерея',
    parent: 'Описание',
    Featuredpr: {
      header: 'Рекомендуемые объекты',
      area: 'Площадь',
      rooms: 'Комнаты',
      beds: 'Кровати',
    },
    Floorplan: 'План этажа',
    leftAmenties: {
      h2: 'Детали недвижимости',
      h2a: 'Удобства',
      propstatic: [
        'ID недвижимости', 'Тип недвижимости', 'Статус недвижимости', 'Цена', 'Комнаты',
        'Спальни', 'Ванная', 'Площадь', 'Год постройки'
      ],
    },
    map: 'Местоположение',
    near: 'Что рядом',
    propvideo: 'Видео недвижимости',
    recentStatic:'Последние объекты',
    reviewAd: {
      header: 'Добавить отзыв',
      p: 'Ваш рейтинг для этого объявления',
      placeholderN: 'Отзыв',
      submit: 'Отправить отзыв',
    },
    reviews: 'Отзывы',
    scheduled: {
      header: 'Запланировать тур',
      ad: 'Взрослый',
      ch: 'Дети',
      submit: 'Отправить',
    },
    simProp: 'Похожие объекты',
    tagscomp: {
      header: 'Популярные теги',
      Tags: ['Дома', 'Настоящий дом', 'Ванные комнаты', 'Спальни', 'Гаражи', 'Семья', 'Недвижимость', 'Объекты', 'Местоположение', 'Цена'],
    },
  };
  

  constructor() { }
}
