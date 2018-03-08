interface Item {
  name: string;
  price: number;
  qty: number;
}

interface CartAPI {
  add(name: string, price: number, qty: number): CartAPI;
  addItem(item: Item): CartAPI;
  length: number;
  total: number;
}

export function cashier(): CartAPI {
  let items: Item[] = [];
  return {
    add(name, price, qty = 1) {
      items.push({ name, price, qty });
      return this;
    },
    addItem(item) {
      items.push(item);
      return this;
    },
    get length(): number {
      return items.reduce((acc, item) => {
        acc = acc + item.qty;
        return acc;
      }, 0);
    },
    get total(): number {
      return items.reduce((acc, item) => {
        acc = acc + item.price * item.qty;
        return acc;
      }, 0);
    }
  };
}
