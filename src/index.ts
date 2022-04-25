import { EventEmitter } from "node:events";

class WaitGroup extends EventEmitter {
  private counter: number;
  public done: boolean;
  constructor() {
    super();
    this.counter = 0;
    this.done = false;
  }
  public add(delta: number = 1) {
    this.counter += delta;
  }
  public remove(delta: number = 1) {
    this.counter -= delta;
    if (this.counter <= 0) {
      this.emit("done");
    }
  }
  public async wait(): Promise<void> {
    return new Promise((resolve) => {
      this.on("done", () => {
        this.done = true;
        resolve();
      });
    });
  }
}

class WaitGroupSync extends EventEmitter {
  private counter: number;
  private done: boolean;
  constructor() {
    super();
    this.counter = 0;
    this.done = false;
  }
  public add(delta: number = 1) {
    this.counter += delta;
  }
  public remove(delta: number = 1) {
    this.counter -= delta;
    if (this.counter <= 0) {
      this.emit("done");
    }
  }
  public async wait(fn: Function) {
    this.on("done", () => {
      this.done = true;
      fn();
    });
  }
}

export { WaitGroup, WaitGroupSync };
