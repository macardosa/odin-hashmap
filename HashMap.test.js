import { HashMap } from "./HashMap.js";

describe('set', () => {
    const map = new HashMap();

    it('should exist', () => {
        expect(map.set).toBeDefined();
    });

    it('should add a key value pair', () => {
        map.set('cow', 'milk');
        const index = map.hash('cow');

        expect(map.buckets[index]).toContainEqual({ key: 'cow', value: 'milk' });
    });

    it('should override value when set again with same key ', () => {
        map.set('cow', 'beef');
        const index = map.hash('cow');

        expect(map.buckets[index]).toContainEqual({ key: 'cow', value: 'beef' });
        expect(map.buckets[index]).not.toContainEqual({ key: 'cow', value: 'milk' });
    });
});

describe('get', () => {
    const map = new HashMap();
    map.set('cow', 'milk');

    it('should exist', () => {
        expect(map.get).toBeDefined();
    });

    it('should return the value that is assigned to key', () => {
        expect(map.get('cow')).toBe('milk');
    });

    it('should return null if key is not found', () => {
        expect(map.get('ampolleta')).toBeNull();
    });
});

describe('has', () => {
    const map = new HashMap();
    map.set('cow', 'milk');
    map.set('bee', 'honey');

    it('should exist', () => {
        expect(map.has).toBeDefined();
    });

    it('should return true if key is in the hash map', () => {
        expect(map.has('cow')).toBe(true);
        expect(map.has('bee')).toBe(true);
    });

    it('should return false if key is NOT in the hash map', () => {
        expect(map.has('ampolleta')).toBe(false);
    });
});

describe('remove', () => {
    const map = new HashMap();
    map.set('cow', 'milk');
    map.set('bee', 'honey');
    map.set('coconut', 'water');
    map.set('fruit', 'juice');

    it('should exist', () => {
        expect(map.remove).toBeDefined();
    });

    it('should delete entry and return true if key is in the hash map', () => {
        expect(map.remove('cow')).toBe(true);
        expect(map.has('cow')).toBe(false);
    });

    it('should return false if key is NOT in the hash map', () => {
        expect(map.remove('ampolleta')).toBe(false);
        expect(map.has('ampolleta')).toBe(false);
    });
});

describe('length', () => {
    const map = new HashMap();
    map.set('cow', 'milk');
    map.set('bee', 'honey');

    it('should exist', () => {
        expect(map.length).toBeDefined();
    });

    it('should return the number of keys in the hash map', () => {
        expect(map.length()).toBe(2);

        map.remove('cow');
        map.remove('bee');

        expect(map.length()).toBe(0);
    });
});

describe('clear', () => {
    const map = new HashMap();
    map.set('cow', 'milk');
    map.set('bee', 'honey');

    it('should exist', () => {
        expect(map.clear).toBeDefined();
    });

    it('should remove all entries in the hash map', () => {
        expect(map.length()).toBe(2);
        map.clear();
        expect(map.length()).toBe(0);
    });
});

describe('keys', () => {
    const map = new HashMap();
    map.set('cow', 'milk');
    map.set('bee', 'honey');

    it('should exist', () => {
        expect(map.keys).toBeDefined();
    });

    it('should return an array with all the keys inside the hash map', () => {
        const keys = map.keys();
        expect(keys.length).toBe(2);
        expect(['cow', 'bee'].every(x => keys.includes(x))).toBe(true);
    });
});

describe('values', () => {
    const map = new HashMap();
    map.set('cow', 'milk');
    map.set('bee', 'honey');

    it('should exist', () => {
        expect(map.values).toBeDefined();
    });

    it('should return an array containing all the values in the hash map', () => {
        const values = map.values();
        expect(values.length).toBe(2);
        expect(['milk', 'honey'].every(x => values.includes(x))).toBe(true);
    });
});

describe('entries', () => {
    const map = new HashMap();
    map.set('cow', 'milk');
    map.set('bee', 'honey');

    it('should exist', () => {
        expect(map.entries).toBeDefined();
    });

    it('should return an array containing each key, value pair in the hash map', () => {
        const entries = map.entries();
        expect(entries.length).toBe(2);
        expect(entries).toContainEqual(['cow', 'milk']);
        expect(entries).toContainEqual(['bee', 'honey']);
    });
});