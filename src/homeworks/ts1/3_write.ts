/**
 * Функции написанные здесь пригодятся на последующих уроках
 * С помощью этих функций мы будем добавлять элементы в список для проверки динамической загрузки
 * Поэтому в идеале чтобы функции возвращали случайные данные, но в то же время не абракадабру.
 * В целом сделайте так, как вам будет удобно.
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

interface Category {
  id: string;
  name: string;
  photo?: string;
}

interface Product {
  id: string;
  name: string;
  photo: string;
  desc?: string;
  createdAt: string;
  oldPrice?: number;
  price: number;
  category: Category;
}

type Operation = Cost | Profit;

interface Cost {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: 'Cost';
}

interface Profit {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: 'Profit';
}

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
export const createRandomProduct = (createdAt: string) => {
  return {
    id: 'productId',
    name: 'productName',
    photo: 'productPhoto',
    desc: 'productDesc',
    createdAt: createdAt,
    oldPrice: 12,
    price: 14,
    category: { id: 'categoryId', name: 'categoryName', photo: 'categoryPhoto' },
  };
};

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
export const createRandomOperation = (createdAt: string) => {
  return {
    id: 'profitId',
    name: 'profitName',
    desc: 'profitDesc',
    createdAt: createdAt,
    amount: 2,
    category: { id: 'categoryId', name: 'categoryName', photo: 'categoryPhoto' },
    type: 'Profit' | 'Cost',
  };
};
