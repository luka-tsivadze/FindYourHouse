import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { error } from 'node:console';

@Injectable({
  providedIn: 'root',
})
export class RusService {
  allForms = {
    form1info: {
      HeaderName1: 'Описание недвижимости и цена',
      firstTitle: 'Заголовок недвижимости',
      firstplaceHolder: 'Введите заголовок вашей недвижимости',

      secondTitle: 'Описание недвижимости',
      secondplaceHolder: 'Опишите вашу недвижимость',

      firstselectName: 'Выберите статус',
      firstselect: [
        'На продажу',
        'В аренду',
        'сдаётся посуточно',
        'Залог',
        
      ],
      firstselectValues: [
        'იყიდება',
        'ქირავდება',
        'ქირავდება დღიურად',
        'გირავდება',
   
      ],
      secondselectName: 'Типы недвижимости',
      secondselect: [
        'Квартира',
        'Дом',
        'Загородный дом',
        'Земельный участок',
        'Коммерческая недвижимость',
        'Отель',
      ],
      secondselectValues:  ['Apartment', 'House','country House','Land Plot','Commercial', 'Hotel'],

      thirdselectName: 'Комнаты',

      thirdTitle: 'Цена',
      fourthTitle: 'Площадь',

      HeaderName2: 'Фотографии недвижимости',
      HeaderName3: 'Видео недвижимости',
      HeaderName4: 'План этажа',
      HeaderName5: 'Местоположение недвижимости',
      HeaderName6: 'Дополнительная информация',
      HeaderName7: 'Особенности недвижимости',
      HeaderName8: 'Контактная информация',
      submit: 'Отправить недвижимость',
    },

    form4Info: [
      {
        id: 'Age',
        FormControlName: 'asaki',
        firstOption: 'Выберите возраст',
        options: [
          '0-1 год',
          '0-5 лет',
          '0-10 лет',
          '0-15 лет',
          '0-20 лет',
          '0-50 лет',
          '50+ лет',
        ],
        optionsValues: [
          '0-1 წელი',
          '0-5 წელი',
          '0-10 წელი',
          '0-15 წელი',
          '0-20 წელი',
          '0-50 წელი',
          '50+ წელი',
        ],
        formControlName: 'asaki',
      },
      {
        id: 'badrooms',
        firstOption: 'Спальни',
        options: ['1', '2', '3', '4', '5', '6'],
        optionsValues: ['1', '2', '3', '4', '5', '6'],
        formControlName: 'sadzinebeli',
      },
      {
        id: 'bathroom',
        firstOption: 'Санузлы',
        options: ['1', '2', '3', '4', '5', '6'],
        optionsValues: ['1', '2', '3', '4', '5', '6'],
        formControlName: 'sveli_wertilebis_raodenoba',
      },
    ],
    City: {
      HeaderName: 'Город',
      placeHolder: 'Введите ваш город',
      id: 'City',
      formControlName: 'qalaqi',
      type: 'text',
    },
    form3Info: [
      {
        HeaderName: 'Адрес',
        placeHolder: 'Введите ваш адрес',
        id: 'adress',
        formControlName: 'misamarti',
        type: 'text',
      },

      // { HeaderName: 'Широта Google Map', placeHolder: 'Широта Google Map', id: 'mapa', formControlName: 'mapis_grdzedi' ,type:'number' },
      // { HeaderName: 'Долгота Google Map', placeHolder: 'Долгота Google Map', id: 'mapo', formControlName: 'mapis_ganedi' , type:'number' }
    ],
    NearByTranslate: {
      Header: 'Близлежащие объекты',
      placeholder: 'Введите название места:',
      placeholderDist: 'Расстояние',
      sections: ['Образование', 'Здоровье и медицина', 'Транспорт'],
      units: ['km', 'meter'],
      unitstr: ['km', 'meter'],
      error: 'Пожалуйста, введите название места',
    },

    form5Info: [
      { text: 'Кондиционер', id: 'air', formControlName: 'kondincioneri' },
      { text: 'Бассейн', id: 'pool', formControlName: 'sacurao_auzi' },
      {
        text: 'Центральное отопление',
        id: 'Heating',
        formControlName: 'centraluri_gatboba',
      },
      { text: 'Прачечная', id: 'room', formControlName: 'samrecxao_otaxi' },
      {
        text: 'Тренажерный зал',
        id: 'gym',
        formControlName: 'sportuli_darbazi',
      },
      { text: 'Сигнализация', id: 'alarm', formControlName: 'signalizacia' },
      { text: 'Балкон', id: 'balcon', formControlName: 'aivani' },
      { text: 'Холодильник', id: 'Refrigerator', formControlName: 'macivari' },
      { text: 'ТВ и Wi-Fi', id: 'TV', formControlName: 'televizia_wifi' },
      { text: 'Микроволновка', id: 'Mic', formControlName: 'microtalguri' },
      
      {text: 'basement', id: 'basement', formControlName: 'sardafi'},
      { text: 'Elevator', id: 'lift', formControlName: 'lifti' },
      { text: 'Garage', id: 'garage', formControlName: 'garage' },
      { text: 'Top Floor', id: 'Floor', formControlName: 'bolo_sartuli' },
      { text: 'Natural gas', id: 'gas', formControlName: 'bunebrivi_airi' },
      { text: 'Storage', id: 'storage', formControlName: 'satavso' },
    ],

    form6Info: [
      {
        HeaderName: 'Имя',
        placeHolder: 'Введите ваше имя',
        id: 'name6',
        formControlName: 'momxmareblis_saxeli',
      },

      {
        HeaderName: 'Электронная почта',
        placeHolder: 'Введите ваш email',
        id: 'Email6',
        formControlName: 'el_fosta',
      },
      {
        HeaderName: 'Телефон',
        placeHolder: 'Введите ваш номер',
        id: 'Number6',
        formControlName: 'telefonis_nomeri',
      },
    ],
  };

  LeftInfo = [
    {
      icon: '../../../assets/Imges/StaticImg/StaticIcons/Location.svg',
      Text: 'Панель управления',
      upText: 'Dashboard',
    },
    {
      icon: '../../../assets/Imges/StaticImg/StaticIcons/person-fill.svg',
      Text: 'Профиль',
      upText: 'Profile',
    },
    {
      icon: '../../../assets/Imges/StaticImg/StaticIcons/list.svg',
      Text: 'Моя недвижимость',
      upText: 'My Properties',
    },

    {
      icon: '../../../assets/Imges/StaticImg/StaticIcons/heart-fill.svg',
      Text: 'Избранная недвижимость',
      upText: 'Favorited Properties',
    },
    {
      icon: '../../../assets/Imges/StaticImg/StaticIcons/list.svg',
      Text: 'Добавить недвижимость',
      upText: 'Add Property',
    },
    {
      icon: '../../../assets/Imges/StaticImg/StaticIcons/credit-card-fill.svg',
      Text: 'Платежи',
      upText: 'Payments',
    },

    {
      icon: '../../../assets/Imges/StaticImg/StaticIcons/lock-fill.svg',
      Text: 'Изменить пароль',
      upText: 'Change Password',
    },
    {
      icon: '../../../assets/Imges/StaticImg/StaticIcons/log-out.svg',
      Text: 'Выйти',
      upText: 'Log Out',
    },
  ];

  Dashboard = {
    dash_listing: {
      mainHeader: 'Панель управления',
      headers: [
        'Название списка',
        'Дата',
        'Рейтинг',
        'Статус',
        'Редактировать',
      ],
      status:['Активный','Неактивный'],
    },
    manage: {
      header: 'Управление панелью',
      cards: [
        { title: 'Опубликованная недвижимость' },
        { title: 'Всего отзывов' },
        { title: 'Сообщения' },
        { title: 'Количество в закладках' },
      ],
    },
    DashReview: {
      header: 'Обзор 4',
    },
    PersonalInfo: {
      staticElements: {
        Header: 'Личная информация',
        updateBtn: 'Обновите ваш пароль',
        submit: 'Отправить',
        placeholder:'Введите ваше имя',
      },
      inputText: [
        { labe: 'Имя', placeholder: 'Введите ваше имя', FormControl: 'saxeli' },
        {
          label: 'Фамилия',
          placeholder: 'Введите вашу фамилию',
          FormControl: 'gvari',
        },

        {
          label: 'Номер телефона',
          placeholder: 'например: +1-800-7700-00',
          FormControl: 'phone',
        },
        {
          label: 'Адрес',
          placeholder: 'Введите ваш адрес',
          FormControl: 'misamarti',
        },
      ],
      textArea: [
        {
          label: 'О себе',
          placeholder: 'Напишите о себе',
          FormControlName: 'chems_shesaxeb',
        },
      ],
      // "!"
UserSelect: [
  {
    label: 'Тип аккаунта',
    placeholder: 'Выберите тип аккаунта',
    options: {
      dis: ['Менеджер по продажам', 'Пользователь'],
      val: ['gayidvebis_menejeri', 'momxmarebeli']
    },
    FormControlName: 'angarishis_tipi'
  },
  {
    label: 'Пол',
    placeholder: 'Выберите пол',
    options: {
      dis: ['Мужской', 'Женский'],
      val: ['kaci', 'qali']
    },
    FormControlName: 'sqesi'
  }
],
Allnetworks: {
  Header: 'Социальные сети',
  elements: [
    { FormControlHref: 'facebook_linki', name: 'Facebook', value: 'Facebook' },
    { FormControlHref: 'instagram_linki', name: 'Instagram', value: 'Instagram' },
    { FormControlHref: 'telegram_linki', name: 'Telegram', value: 'Telegram' },
    { FormControlHref: 'linkedin_linki', name: 'LinkedIn', value: 'LinkedIn' },
    { FormControlHref: 'whatsapp_linki', name: 'WhatsApp', value: 'WhatsApp' }
  ]
},
UserMessage: {
  text: 'Ваша информация успешно обновлена',
  error: false,
  ErrorText:'Ошибка',
  fileSelected: false
},
Elements : {
  Header: 'Загрузите фото профиля',
  submit: 'Сохранить'
}


    },
  };
  Profile = {
    header: 'Детали профиля',
    inquary: 'Запрос информации',
    submit: 'Отправить запрос',
    input: ['Имя', 'Номер телефона', 'Электронная почта'],
  };
  ChangePassword = {
    header: 'Изменить пароль',
    pas: 'Текущий пароль',
    NewPas: 'Новый пароль',
    ConfPas: 'Подтвердите ваш пароль',
    submit: 'Отправить изменения',
  };
  myProp = {
    Header: 'Лучшие объекты',
    date: 'Дата добавления',
    Views: 'Просмотры',
    action: 'Действия',
    rew: 'Отзывы',
    Ed: 'Редактировать',
    prev: 'Предыдущий',
    next: 'Следующий',
    ago: ' Месяцев назад',
  };

  contact = {
    staticText: {
      header: 'Контакты',
      headerH4: 'Главная  /  Контакты',
      formH3: 'Контакты',
      Mes: 'Сообщение',
      sub: 'Отправить',
      cd: 'Контактные данные',
      cp: 'Пожалуйста, найдите ниже контактные данные и свяжитесь с нами сегодня!',
    },
    inputs: [
      { placeholder: 'Имя', type: 'text', FormControlname: 'saxeli' },
      { placeholder: 'Фамилия', type: 'text', FormControlname: 'gvari' },
      { placeholder: 'Заголовок', type: 'text', FormControlname: 'satauri' },
      { placeholder: 'Эл. почта', type: 'email', FormControlname: 'maili' },
    ],
 
  };
  About = {
    headerH2: 'О нашей компании',
    headerH4: 'Главная / О нас',
    span1: 'О нас',
    span2: 'Найти дома',
    mainText: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum odio id voluptatibus incidunt cum? Atque quasi eum debitis optio ab. Esse itaque officiis tempora possimus odio rerum aperiam ratione, sunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit sunt.`,
    btn: 'Читать далее',
  };
  Webreview={
    header: 'Добавить отзыв',
    p: 'Ваш рейтинг для этого объявления',
    placeholderN: 'Отзыв',
    submit: 'Отправить отзыв',
  }
  DetailedInfo = {
    advertismentr: 'Реклама',
    AgentsInfo: {
      inputs: [
        {
          type: 'text',
          placeholder: 'Имя',
          formControlName: 'gamgzavnis_saxeli',
        },
        {
          type: 'text',
          placeholder: 'Номер телефона',
          formControlName: 'gamgzavnis_tel_nomeri',
        },
        {
          type: 'email',
          placeholder: 'Электронная почта',
          formControlName: 'gamgzavnis_maili',
        },
      ],
      staticValues: {
        h3: 'Информация об агенте',
        p: 'Агент по недвижимости',
        Agentp:'Агент по недвижимости',
        Userp:'Пользователь',
        req: 'Отправить сообщение',
        submit: 'Отправить',
        textArea: 'Сообщение',
      },
    },
    CardGallery1: 'Галерея',
    unit: 'кв.м',
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
        'ID недвижимости',
        'Тип недвижимости',
        'Статус недвижимости',
        'Цена',
        'Комнаты',
        'Спальни',
        'Ванная',
        'Площадь',
        'Год постройки',
      ],
    },
    map: 'Местоположение',
    near: 'Что рядом',
    propvideo: 'Видео недвижимости',
    recentStatic: 'Последние объекты',
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
      Tags: [
        'Дома',
        'Настоящий дом',
        'Ванные комнаты',
        'Спальни',
        'Гаражи',
        'Семья',
        'Недвижимость',
        'Объекты',
        'Местоположение',
        'Цена',
      ],
    },
  };

  constructor() {}
}
