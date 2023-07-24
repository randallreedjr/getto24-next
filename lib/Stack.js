// Stack class
export default class Stack {

	// Array is used to implement stack
	constructor()
	{
		this.items = [];
    this.size = 0;
	}

	// Functions to be implemented
	// push(item)
  push(element) {
    this.size += 1;
    this.items.push(element);
  }

  pop() {
    if (this.size > 0) {
      this.size -= 1;
      return this.items.pop();
    }
  }

  peek() {
    if (this.size > 0) {
      return this.items[this.size - 1];
    }
  }

  size() {
    return this.size;
  }

  empty() {
    this.size == 0;
  }
}
