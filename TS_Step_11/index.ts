interface Queue<T> {
  enqueue(item: T): void; // add to the queue
  dequeue(): T | undefined; // remove from the queue
  peek(): T | undefined | null; // view the first element
  isEmpty(): boolean; // check if the entity is "empty"
  length(): number; // check the length
}

// Implementation of the queue using an array
// The ArrayQueue class must implement the Queue interface
// The class can work with any type of data, meaning it can store any data in the array <-- Important

// A queue is a data structure that functions like a real queue in a store.
// The first person who reaches the counter is the first to leave. Similarly, in code, tasks are processed in this order.
// You can find more details on Wikipedia or other websites by searching "Queue data structure"

class ArrayQueue<T> implements Queue<T> {
  // Create a private property queue, which is an array by default and can contain an array of any type
  // Method hints:
  // To add to the queue, you can use the push method
  // To remove an item, use shift, as the first element needs to be removed
  // Pay attention to the return value
  // isEmpty can be used in other methods

  private queueArr: T[] = [];

  enqueue(this: ArrayQueue<T>, item: T): void {
    this.queueArr.push(item);
    console.log(this.queueArr);
  }
  dequeue(this: ArrayQueue<T>): T {
    if (this.queueArr.length > 0) {
      this.queueArr.shift();
      return this.queueArr as T;
    }

    console.log(this.queueArr, 'is empty');
    throw new Error('Array is empty');
  }
  peek(this: ArrayQueue<T>): T | null {
    if (this.isEmpty()) {
      return null;
    } else {
      return this.queueArr[0];
    }
  }

  isEmpty(this: ArrayQueue<T>): boolean {
    return this.queueArr.length === 0 ? true : false;
  }

  length(this: ArrayQueue<T>): number {
    return this.queueArr.length;
  }
}

// A stack is another data structure. The simplest way to imagine it is as a stack of papers on a desk.
// The last one you put on top is the first one you will take later.
// You can find more details on Wikipedia or other websites by searching "Stack data structure"
// The Stack class contains different methods, so it does not need to implement anything
// The class can work with any type of data, meaning it can store any data in an array <-- Important

class Stack<T> {
  private stack: T[] = [];
  private limit: number;
  // Create a private property stack, which is an array by default and can contain an array of any type
  // Create a private property limit, which will be of type number

  // Here we set a limit on the stack of papers.
  // If the stack overflows, the program crashes, and a very high stack of papers falls.
  // So there must always be a limit.
  constructor(limit: number = Number.MAX_VALUE) {
    this.limit = limit;
  }

  push(this: Stack<T>, value: T) {
    // Adds an element to the stack
    // If the stack is full, it throws an error (throw new Error)
    if (this.stack.length >= this.limit) {
      console.log('Stack overflow');
      throw new Error('Stack over the limit');
    } else {
      this.stack.push(value);
    }
    console.log(this.stack, 'push');
  }

  pop(this: Stack<T>): T {
    // Removes the last element from the array
    // If the stack is empty, it throws an error (throw new Error)
    // Returns the removed element
    // Simply put: you take the top sheet from the stack and use it
    // If there are no sheets on the table, you get an error since there's nothing to take
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    }
    return this.stack.pop() as T;
  }

  length(this: Stack<T>): number {
    // Returns the number of elements in the stack
    return this.stack.length;
  }

  isEmpty(this: Stack<T>): boolean {
    return this.stack.length === 0 ? true : false;
  }

  top(this: Stack<T>): null | T {
    // Returns the last (top) element of the stack without removing it
    // You simply read what is written on the top paper
    // If the stack is empty - returns null
    // let lastItem: null | T;

    if (!this.isEmpty()) {
      let lastItem = this.stack.length - 1;

      return this.stack[lastItem];
    } else {
      console.log('There are nothing to return - null');
      return null;
    }
  }
}

// For tests

const arrTest1 = new ArrayQueue<number>();
arrTest1.enqueue(5);
arrTest1.enqueue(10);
console.log(arrTest1.peek());
console.log(arrTest1.dequeue());
console.log(arrTest1.length());

const arrTest2 = new ArrayQueue<string>();
arrTest2.enqueue('5');
arrTest2.enqueue('10');
console.log(arrTest2.peek());
console.log(arrTest2.dequeue());
console.log(arrTest2.length());

const stackTest1 = new Stack<number>(10);
stackTest1.push(20);
stackTest1.push(50);
console.log(stackTest1.top());
console.log(stackTest1.pop());
console.log(stackTest1.length());

const stackTest2 = new Stack<string>(10);
stackTest2.push('20');
stackTest2.push('50');
console.log(stackTest2.top());
console.log(stackTest2.pop());
console.log(stackTest2.length());
