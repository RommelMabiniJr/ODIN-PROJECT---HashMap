import LinkedList from "./LinkedList.js";

class HashMap {
    constructor(loadFactor, capacity) {
        this.loadFactor = loadFactor;
        this.capacity = capacity;
        this.buckets = Array.from({length: this.capacity}, () => new LinkedList());
    }

    hash(key) {
        let hashCode = 0;
            
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            // console.log(`primeNum: ${primeNumber} hashCode: ${hashCode} | characterCode: ${key.charCodeAt(i)}`);
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        }

        return hashCode;
    } 

    set(key, value) {
        const index = this.hash(key);

        if(index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        const bucket = this.buckets[index];
        bucket.upsert(key, value);
    }

    get(key) {
        const index = this.hash(key)

        if(index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        const bucket = this.buckets[index]
        const node = bucket.get(key);
        return node ? node.value : null;
    }

    has(key) {
        const index = this.hash(key);

        if(index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        const bucket = this.buckets[index];
        return bucket.contains()
    }

    entries() {
        return this.buckets;
    }


}

export default HashMap;