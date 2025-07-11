class HashMap {
    constructor(loadFactor, capacity) {
        this.loadFactor = loadFactor;
        this.capacity = capacity;
        this.buckets = new Array(this.capacity);
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
        const index = this.hash(key)
        this.buckets[index] = value;
    }

    get(key) {
        const index = this.hash(key)
        const result = this.buckets[index]
        return result ? result : null
    }

    has(key) {
        
    }

    entries() {
        return this.buckets;
    }


}

export default HashMap;