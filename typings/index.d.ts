/// <reference types="node" />
import { EventEmitter } from "node:events";
declare class WaitGroup extends EventEmitter {
    private counter;
    done: boolean;
    constructor();
    add(delta?: number): void;
    remove(delta?: number): void;
    wait(): Promise<void>;
}
declare class WaitGroupSync extends EventEmitter {
    private counter;
    private done;
    constructor();
    add(delta?: number): void;
    remove(delta?: number): void;
    wait(fn: Function): Promise<void>;
}
export { WaitGroup, WaitGroupSync };
