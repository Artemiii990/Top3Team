// Each menu has a flexible number of columns (1-3, confirmed varies by section).
// Column 1 is always: title + bold "featured" links + an optional smaller "bottom" link.
// Extra columns are plain { title, links[] } groups.
type ExtraColumn = {
  title: string;
  links: string[];
};

type MenuEntry = {
  title: string;
  featured: string[];
  bottomLink?: string; // e.g. "Порівняння моделей Mac" / "Дізнатися про підтримку" / "Переглянути всі варіанти"
  columns?: ExtraColumn[]; // 0, 1, or 2 extra columns
};

export const MENU_DATA: Record<string, MenuEntry> = {
  Store: {
    title: 'Магазин',
    featured: [
      'Переглянути магазин',
      'Mac',
      'iPad',
      'iPhone',
      'Apple Watch',
      'AirPods',
      'TV',
    ],
    columns: [
      {
        title: 'Покупки в Apple',
        links: ['Спеціальні пропозиції', 'Apple Trade In', 'Фінансування'],
      },
      {
        title: 'Допомога',
        links: ['Статус замовлення', 'Допомога з покупкою'],
      },
    ],
  },

  //MACBOOK
  Mac: {
    title: 'Дізнатися про Mac',
    featured: [
      'Переглянути всі моделі Mac',
      'MacBook Neo',
      'MacBook Air',
      'MacBook Pro',
      'iMac',
      'Mac mini',
      'Mac Studio',
      'Дисплеї',
    ],
    bottomLink: 'Порівняння моделей Mac',
    columns: [
      {
        title: 'Більше від Mac',
        links: ['Підтримка Mac'],
      },
    ],
  },

  //iPAD
  iPad: {
    title: 'Дізнатися про iPad',
    featured: [
      'Переглянути всі моделі iPad',
      'iPad Pro',
      'iPad Air',
      'iPad',
      'iPad mini',
      'Apple Pencil',
      'Клавіатури', 
    ],
    bottomLink: 'Порівняння моделей iPad',
    columns: [
      {
        title: 'Більше від iPad',
        links: ['Підтримка iPad'],
      },
    ],
  },

  //iPHONE
  iPhone: {
    title: 'Дізнатися про iPhone',
    featured: [
      'Переглянути всі моделі iPhone',
      'iPhone 17 Pro',
      'iPhone Air',
      'iPhone 17',
      'iPhone 17e',
      'iPhone 16',
    ],
    bottomLink: 'Порівняння моделей iPhone',
    columns: [
      {
        title: 'Більше від iPhone',
        links: ['Підтримка iPhone'],
      },
    ],
  },

  //WATCH
  Watch: {
    title: 'Дізнатися про Watch',
    featured: [
      'Переглянути всі моделі Apple Watch',
      'Apple Watch Series 11',
      'Apple Watch SE 3',
      'Apple Watch Ultra 3',
    ],
    bottomLink: 'Порівняння моделей Watch',
    columns: [
      {
        title: 'Більше від Watch',
        links: ['Підтримка Apple Watch'],
      },
    ],
  },

  //AIRPODS
  AirPods: {
    title: 'Дізнатися про AirPods',
    featured: [
      'Переглянути всі моделі AirPods',
      'AirPods 4', 
      'AirPods Pro 3', 
      'AirPods Max 2',
    ],
    bottomLink: 'Порівняння моделей AirPods',
    columns: [
      {
        title: 'Більше від AirPods',
        links: ['Підтримка AirPods'],
      },
    ],
  },

  //TV
  TV: {
    title: 'Дізнатися про TV',
    featured: [
      'Дізнатися про TV',
      'Apple TV 4K',
    ],
    columns: [
      {
        title: 'Більше від TV',
        links: ['Підтримка Apple TV'],
      },
    ],
  },

  //SERVICES
  Сервіси: {
    title: 'Дізнатися про сервіси',
    featured: [
      'Переглянути сервіси',
      'Apple One',
      'Apple TV',
      'Apple Music', 
      'Apple Arcade',
      'Apple Podcasts',
      'App Store',
    ],
    columns: [
      {
        title: 'Підтримка',
        links: ['Підтримка Apple TV', 'Підтримка Apple Music'],
      },
    ],
  },

  // SUPPORT
  Підтримка: {
    title: 'Дізнатися про підтримку',
    featured: ['iPhone', 'Mac', 'iPad', 'Watch', 'AirPods', 'Music', 'TV'],
    bottomLink: 'Дізнатися про підтримку',
    columns: [
      {
        title: 'Допомога',
        links: ['Спільнота', 'Перевірити програму підтримки'],
      },
      {
        title: 'Корисні теми',
        links: [
          'Обліковий запис Apple і пароль',
          'Виставлення рахунків і підписки',
          'Доступність',
        ],
      },
    ],
  },

  // BUY
  'Де купити': {
    title: 'Огляд',
    featured: ['Офіційні партнери', 'Обслуговування та підтримка'],
    bottomLink: 'Переглянути всі варіанти',
    columns: [],
  },
};