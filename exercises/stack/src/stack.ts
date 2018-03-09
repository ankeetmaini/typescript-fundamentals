interface IStack<T> {
  push(item: T): IStack<T>;
  push(items: T[]): IStack<T>;
  pop(): T | undefined;
  length(): number;
  print(): void;
}

export class Stack<T> implements IStack<T> {
  items: T[] = [];

  pop(): T {
    return this.items.splice(-1)[0];
  }

  push(items: T | T[]): IStack<T> {
    if (Array.isArray(items)) {
      this.items = [...this.items, ...items];
    } else {
      this.items.push(items);
    }
    return this;
  }

  length(): number {
    return this.items.length;
  }

  print() {
    console.log(this.items.join(','));
  }
}
