export class HashMap {
    static defaultCapacity = 16;
    static loadFactor = 0.75;

    constructor() {
        this.capacity = HashMap.defaultCapacity;
        this.buckets = new Array(this.capacity);
        this.size = 0;
    }

    hash(key) {
        key = String(key);
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        }

        return hashCode;
    }

    grow() {
        const entries = this.entries();

        this.capacity *= 2;
        this.buckets = new Array(this.capacity);

        for (const [key, value] of entries) {
            const index = this.hash(key);

            if (!this.buckets[index]) {
                this.buckets[index] = [];
            }

            this.buckets[index].push({ key, value });
        }
    }

    set(key, value) {
        let index = this.hash(key);

        if (!this.buckets[index]) {
            this.buckets[index] = [];
        }

        const entry = this.buckets[index].find(entry => entry.key === key);

        if (entry) {
            entry.value = value;
            return;
        }

        if (this.size + 1 > this.capacity * HashMap.loadFactor) {
            this.grow();
            index = this.hash(key); // recalculate after grow
            if (!this.buckets[index]) this.buckets[index] = [];
        }

        this.buckets[index].push({ key, value });
        this.size++;
    }

    get(key) {
        const bucket = this.buckets[this.hash(key)];
        if (!bucket) return null;

        const entry = bucket.find(entry => entry.key === key);

        if (entry) return entry.value;

        return null;
    }

    has(key) {
        const bucket = this.buckets[this.hash(key)];
        if (!bucket) return false;

        return bucket.some(entry => entry.key === key);
    }

    remove(key) {
        if (!this.has(key)) return false;

        const index = this.hash(key);
        this.buckets[index] = this.buckets[index].filter(entry => entry.key !== key);
        this.size--;
        return true;
    }

    length() {
        return this.size;
    }

    clear() {
        this.buckets = new Array(this.capacity);
        this.size = 0;
    }

    keys() {
        const keys = [];
        for (let i = 0; i < this.capacity; i++) {
            if (!this.buckets[i]) continue;
            this.buckets[i].forEach(entry => keys.push(entry.key));
        }

        return keys;
    }

    values() {
        const values = [];
        for (let i = 0; i < this.capacity; i++) {
            if (!this.buckets[i]) continue;
            this.buckets[i].forEach(entry => values.push(entry.value));
        }

        return values;
    }

    entries() {
        const entries = [];
        for (let i = 0; i < this.capacity; i++) {
            if (!this.buckets[i]) continue;
            this.buckets[i].forEach(entry => entries.push([entry.key, entry.value]));
        }

        return entries;
    }

    distribution() {
        for (let i = 0; i < this.capacity; i++) {
            let str = `[${i}]: `;

            if (this.buckets[i]) {
                this.buckets[i].forEach(entry => {
                    str += ` -> ( ${entry.key}, ${entry.value} )`;
                });
            };

            console.log(str);
        }
    }
}