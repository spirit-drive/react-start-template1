/**
 * Здесь код с ошибками типов. Нужно их устранить
 * */

// // Мы это не проходили, но по тексту ошибки можно понять, как это починить
export const getFakeApi = async (): Promise<void> => {
  const result = await fetch('https://jsonplaceholder.typicode.com/todos/1').then((response: Response) =>
    response.json()
  );
  console.log(result);
};

// // Мы это не проходили, но по тексту ошибки можно понять, как это починить
export class SomeClass {
  protected set: Set<number>;
  protected channel: BroadcastChannel;
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

// Здесь, возможно, нужно использовать as, возможно в switch передавать немного по-другому
export const getDataAmount = (data: Data): number | never => {
  switch (data.value) {
    case <Money>data.value:
      return data.value.amount;

    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      let unhandled: never; // здесь, возможно, нужно использовать нечто другое. :never должен остаться
      throw new Error(`unknown type: ${data.type}`);
    }
  }
};
