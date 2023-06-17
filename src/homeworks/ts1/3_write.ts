/**
 * Функции написанные здесь пригодятся на последующих уроках
 * С помощью этих функций мы будем добавлять элементы в список для проверки динамической загрузки
 * Поэтому в идеале чтобы функции возвращали случайные данные, но в то же время не абракадабру.
 * В целом сделайте так, как вам будет удобно.
 * */

export type Category = {
  id: string;
  name: string;
  photo?: string;
};

export type Product = {
  id: string;
  name: string;
  photo: string;
  desc?: string;
  createdAt: string;
  oldPrice?: number;
  price: number;
  category: Category;
};

export type Operation = {
  type: 'Cost' | 'Profit';
  value: OperationValue;
};

export type OperationValue = Cost | Profit;

export type Cost = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
};

export type Profit = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
};

// Данные для создания рандомных продуктов

const categoriesProducts: Category[] = [
  { id: '1', name: 'Декоративно-лиственные', photo: 'listvennie.png' },
  { id: '2', name: 'Суккуленты', photo: 'sukkulenti.png' },
  { id: '3', name: 'Цветущие' },
  { id: '4', name: 'Фикусы', photo: 'fikusi.png' },
  { id: '5', name: 'Лианы' },
];

const products: Product[] = [
  {
    id: '1',
    name: 'Калатея',
    photo: 'kalateya.png',
    desc: 'Калатея Бьютистар – декоративный травянистый многолетник, один из ярких представителей многообразного семейства Марантовых. Происходит из тропиков Южной Америки и Бразилии.',
    createdAt: '2023-06-06T12:06:56.957Z',
    price: 1990,
    category: categoriesProducts[1],
  },
  {
    id: '2',
    name: 'Эхеверия',
    photo: 'eheveria.png',
    desc: 'Эхеверия Апус – миниатюрный суккулент, относится к семейству Толстянковые. Родиной считаются засушливые районы Мексики и Америки.',
    createdAt: '2023-06-06T12:06:56.957Z',
    price: 1200,
    category: categoriesProducts[2],
  },
  {
    id: '3',
    name: 'Фикус Бенджамина',
    photo: 'fikus_bendgamina.png',
    createdAt: '2023-06-06T12:06:56.957Z',
    price: 1500,
    category: categoriesProducts[4],
  },
  {
    id: '4',
    name: 'Спатифиллум',
    photo: 'spatifillum.png',
    createdAt: '2023-06-06T12:06:56.957Z',
    price: 1190,
    category: categoriesProducts[3],
  },
  {
    id: '5',
    name: 'Маранта',
    photo: 'maranta.png',
    desc: 'Маранта Лемон – коллекционный гибридный сорт тропического травянистого многолетника семейства Марантовые, завезённого из лесов Южной Америки.',
    createdAt: '2023-06-06T12:06:56.957Z',
    price: 2000,
    category: categoriesProducts[5],
  },
];

/**
 * Находит случайный продукт из заданного массива.
 * Принимает массив продуктов
 * */
const findRandomProduct = (): Product => {
  const randomProduct = products[Math.floor(Math.random() * products.length)];
  return randomProduct;
};

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
export const createRandomProduct = (createdAt: string): Product => {
  const randomCategory = categoriesProducts[Math.floor(Math.random() * categoriesProducts.length)]; // Получаем случайную категорию

  // Создаем случайный продукт
  const newRandomProduct = {
    id: createdAt + Math.random().toString(36).substring(2, 4),
    name: findRandomProduct().name,
    photo: findRandomProduct().photo,
    desc: findRandomProduct().desc,
    createdAt,
    price: findRandomProduct().price,
    category: randomCategory as Category,
  };

  return newRandomProduct;
};

// Данные для создания рандомных операций

const categoriesOperations: Category[] = [
  { id: '1', name: 'Еда' },
  { id: '2', name: 'Здоровье' },
  { id: '3', name: 'Одежда' },
  { id: '4', name: 'Развлечения' },
  { id: '5', name: 'Животные' },
  { id: '6', name: 'Другое' },
];

const operations: OperationValue[] = [
  {
    id: '1',
    name: 'Киномакс',
    desc: 'Стражи Галактики: Часть 3',
    createdAt: '2023-06-06T12:06:56.957Z',
    amount: 1000,
    category: categoriesOperations[4],
  },
  {
    id: '2',
    name: 'Перевод',
    desc: 'Алексеева И.А.',
    createdAt: '2023-06-06T12:06:56.957Z',
    amount: 3500,
    category: categoriesOperations[6],
  },
  {
    id: '3',
    name: 'Перевод',
    desc: 'Михайлов М.Н.',
    createdAt: '2023-06-06T12:06:56.957Z',
    amount: 1600,
    category: categoriesOperations[6],
  },
  {
    id: '4',
    name: 'Четыре лапы',
    createdAt: '2023-06-06T12:06:56.957Z',
    amount: 5300,
    category: categoriesOperations[5],
  },
  {
    id: '5',
    name: 'Вкусвилл',
    createdAt: '2023-06-06T12:06:56.957Z',
    amount: 1200,
    category: categoriesOperations[1],
  },
];

/**
 * Находит случайную операцию из заданного массива.
 * Принимает массив операций
 * */
const findRandomOperation = (): Cost | Profit => {
  const randomOperation = operations[Math.floor(Math.random() * operations.length)];
  return randomOperation;
};

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
const createRandomOperation = (createdAt: string): Operation => {
  const randomCategory = categoriesOperations[Math.floor(Math.random() * categoriesOperations.length)]; // Получаем случайную категорию

  // Создаем случайную операцию
  const randomOperation: Operation = {
    type: Math.random() < 0.5 ? 'Cost' : 'Profit', // Рандомно определяем тип операции
    value: {
      id: createdAt + Math.random().toString(36).substring(2, 4),
      name: findRandomOperation().name,
      desc: findRandomOperation().desc,
      createdAt: createdAt,
      amount: findRandomOperation().amount,
      category: randomCategory as Category,
    },
  };
  return randomOperation;
};
