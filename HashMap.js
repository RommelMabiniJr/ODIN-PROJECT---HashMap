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

    _getIndex(key) {
        const index = this.hash(key);

        if(index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        return index;
    }

    // grow the hashmap by doubling its capacity, resetting the buckets
    // and reassigning all key and value pairs to the new buckets
    _growHashMap() {
        let allPairs = this.entries();

        // grow hashmap capacity and reset buckets
        this.capacity = this.capacity * 2;
        this.clear()
        
        // reassign old key and value pairs using new capacity
        allPairs.forEach(pair => {
            let key = pair[0];
            let value = pair[1];

            const index = this._getIndex(key);
            const bucket = this.buckets[index];

            console.log(`Reassigning key: ${key} at index: ${index}`);
            bucket.upsert(key, value);
        });
    }

    set(key, value) {
        // Checks if adding a new entry will go beyond maximum capacity
        if((this.length() + 1) > (this.capacity * this.loadFactor)) {
            // Exit if the key is for an existing entry 
            if (this.has(key) === false) {
                console.log(`Growing hashmap from ${this.capacity} to ${this.capacity * 2}`);
                this._growHashMap();
            }
        }

        const index = this._getIndex(key);
        const bucket = this.buckets[index];
        console.log(`Setting key: ${key} at index: ${index}`);
        bucket.upsert(key, value);
    }

    get(key) {
        const index = this._getIndex(key);
        const bucket = this.buckets[index];
        const node = bucket.get(key);
        return node ? node.value : null;
    }

    has(key) {
        const index = this._getIndex(key);
        const bucket = this.buckets[index];
        return bucket.contains(key);
    }

    remove(key) {
        const index = this._getIndex(key);
        const bucket = this.buckets[index];
        console.log(`Removing key: ${key} at index: ${index}`);
        return bucket.remove(key);
    }

    length() {
        return this.buckets.reduce((currLength, bucket) => currLength + bucket.numberOfNodes(), 0);
    }

    clear() {
        this.buckets = Array.from({length: this.capacity}, () => new LinkedList());
    }

    keys() {
        return this.buckets.reduce((keysArray, bucket) => [...keysArray, ...bucket.getAllKeys()], [])
    }

    values() {
        return this.buckets.reduce((valuesArray, bucket) => [...valuesArray, ...bucket.getAllValues()], [])
    }

    entries() {
        return this.buckets.reduce((pairsArray, bucket) => [...pairsArray, ...bucket.getAllKeyAndValuePair()], [])
    }

}

export default HashMap;