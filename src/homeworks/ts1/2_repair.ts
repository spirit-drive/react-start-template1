/**
 * Здесь код с ошибками типов. Нужно их устранить
 * */

// Функция должна возвращать промис
export const getFakeApi = async (): Promise<void> => {
  const result = await fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => response.json());
  console.log(result);
};

// Нужно объявить свойства set и channel
export class SomeClass {
  public set: Set<number>;
  public channel: BroadcastChannel;

  constructor() {
    this.set = new Set([1]);
    this.channel = new BroadcastChannel('test-broadcast-channel');
  }
}

export type Data = {
  type: 'Money' | 'Percent';
  value: DataValue;
};

export type DataValue = Money | Percent;

export type Money = {
  currency: string;
  amount: number;
};

export type Percent = {
  percent: number;
};

// Объявляем data.value с помощью as для каждого кейса
const getDataAmount = (data: Data): number => {
  switch (data.type) {
    case 'Money': {
      const moneyType = data.value as Money;
      return moneyType.amount;
    }
    case 'Percent': {
      return null;
    }
    default: {
      const unhandled: never = data.type; // вместо data, нужно указать data.type
      throw new Error(`unknown type: ${unhandled}`);
    }
  }
};
