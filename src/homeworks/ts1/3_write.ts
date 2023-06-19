/**
 * Функции написанные здесь пригодятся на последующих уроках
 * */

/**
 * Нужно создать тип Category, он будет использоваться ниже.
 * Категория содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка, необязательно)
 *
 
 * Продукт (Product) содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - oldPrice (число, необязательно)
 * - price (число)
 * - category (Категория)
 *
 * Операция (Operation) может быть либо тратой (Cost), либо доходом (Profit)
 *
 * Трата (Cost) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Cost')
 *
 * Доход (Profit) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Profit')
 * */

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
// export const createRandomProduct = (createdAt: string) => {};

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
// export const createRandomOperation = (createdAt: string) => {};

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

export type Operation = Cost | Profit;

export type Cost = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: 'Cost';
};
export type Profit = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: 'Profit';
};

export const createRandomProduct = (createdAt: string): Product => {
  const id = Math.floor(Math.random() * 1000000).toString();
  const name = `Product ${id}`;
  const photo = `https://example.com/products/${id}.jpg`;
  const desc = `Description for ${name}`;
  const oldPrice = Math.floor(Math.random() * 100) + 50;
  const price = Number(`$${Math.floor(Math.random() * 10)}.${Math.floor(Math.random() * 99)}`);
  const category: Category = {
    id: Math.floor(Math.random() * 100).toString(),
    name: `Category ${id}`,
    photo: `https://example.com/categories/${id}.jpg`,
  };
  return {
    id,
    name,
    photo,
    desc,
    createdAt,
    oldPrice,
    price,
    category,
  };
};

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 */
export const createRandomOperation = (createdAt: string): Operation => {
  const id = Math.floor(Math.random() * 1000000).toString();
  const name = `Operation ${id}`;
  const desc = `Description for ${name}`;
  const amount = Math.floor(Math.random() * 1000) + 100;
  const category: Category = {
    id: Math.floor(Math.random() * 100).toString(),
    name: `Category ${id}`,
    photo: `https://example.com/categories/${id}.jpg`,
  };
  const type = Math.random() < 0.5 ? 'Cost' : 'Profit';
  return type === 'Cost'
    ? {
        id,
        name,
        desc,
        createdAt,
        amount,
        category,
        type,
      }
    : {
        id,
        name,
        desc,
        createdAt,
        amount,
        category,
        type,
      };
};
