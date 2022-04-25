"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WaitGroupSync = exports.WaitGroup = void 0;
const node_events_1 = require("node:events");
class WaitGroup extends node_events_1.EventEmitter {
    constructor() {
        super();
        this.counter = 0;
        this.done = false;
    }
    add(delta = 1) {
        this.counter += delta;
    }
    remove(delta = 1) {
        this.counter -= delta;
        if (this.counter <= 0) {
            this.emit("done");
        }
    }
    async wait() {
        return new Promise((resolve) => {
            this.on("done", () => {
                this.done = true;
                resolve();
            });
        });
    }
}
exports.WaitGroup = WaitGroup;
class WaitGroupSync extends node_events_1.EventEmitter {
    constructor() {
        super();
        this.counter = 0;
        this.done = false;
    }
    add(delta = 1) {
        this.counter += delta;
    }
    remove(delta = 1) {
        this.counter -= delta;
        if (this.counter <= 0) {
            this.emit("done");
        }
    }
    async wait(fn) {
        this.on("done", () => {
            this.done = true;
            fn();
        });
    }
}
exports.WaitGroupSync = WaitGroupSync;
