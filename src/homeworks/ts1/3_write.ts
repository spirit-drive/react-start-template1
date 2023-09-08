/**
 * Функции написанные здесь пригодятся на последующих уроках
 * С помощью этих функций мы будем добавлять элементы в список для проверки динамической загрузки
 * Поэтому в идеале чтобы функции возвращали случайные данные, но в то же время не абракадабру.
 * В целом сделайте так, как вам будет удобно.
 * */
import { faker } from '@faker-js/faker';

/**
 * Нужно создать тип Category, он будет использоваться ниже.
 * Категория содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка, необязательно)
 **/
type Category = {
  id: string;
  name: string;
  photo?: string;
};

/**
 * Продукт (Product) содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - oldPrice (число, необязательно)
 * - price (число)
 * - category (Категория)
 **/
type Product = {
  id: string;
  name: string;
  photo: string;
  desc?: string;
  createdAt: string;
  oldPrice?: number;
  price: number;
  category: Category;
};

/**
 * Операция (Operation) может быть либо тратой (Cost), либо доходом (Profit)
 *
 */
type Operation = Cost | Profit;

type OperationType<T extends 'Cost' | 'Profit'> = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: T;
};

/**
 * Трата (Cost) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Cost')
 **/
type Cost = OperationType<'Cost'>;

/**
 * Доход (Profit) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Profit')
 * */
type Profit = OperationType<'Profit'>;

export const createRandomCategory = (): Category => {
  return <Category>{
    id: faker.string.uuid(),
    name: faker.word.noun({ length: { min: 5, max: 10 } }),
    photo: faker.image.url(),
  };
};

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
export const createRandomProduct = (createdAt: string): Product => {
  return {
    id: faker.string.uuid(),
    name: faker.word.noun({ length: { min: 5, max: 10 } }),
    desc: faker.word.words({ count: { min: 2, max: 5 } }),
    photo: faker.image.url(),
    createdAt: createdAt,
    oldPrice: faker.number.int({ min: 100, max: 200 }),
    price: faker.number.int({ min: 100, max: 200 }),
    category: createRandomCategory(),
  };
};

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
export const createRandomOperation = (createdAt: string): Operation => {
  switch (Math.round(Math.random())) {
    case 0:
      return {
        id: faker.string.uuid(),
        name: faker.word.noun({ length: { min: 5, max: 10 } }),
        desc: faker.word.words({ count: { min: 2, max: 5 } }),
        createdAt: createdAt,
        category: createRandomCategory(),
        amount: faker.number.int({ min: 10, max: 100 }),
        type: 'Cost',
      };
    case 1:
      return {
        id: faker.string.uuid(),
        name: faker.word.noun({ length: { min: 5, max: 10 } }),
        desc: faker.word.words({ count: { min: 2, max: 5 } }),
        createdAt: createdAt,
        category: createRandomCategory(),
        amount: faker.number.int({ min: 10, max: 100 }),
        type: 'Profit',
      };
  }
};
