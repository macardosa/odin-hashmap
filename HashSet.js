import { HashMap } from "./HashMap.js";

export class HashSet extends HashMap {
    add(key) {
        this.set(key, null);
    }

    get(key) {
        throw new Error('HashSet does not support get()');
    }

    values() {
        throw new Error('HashSet does not support values()');
    }

    entries() {
        throw new Error('HashSet does not support entries()');
    }
}