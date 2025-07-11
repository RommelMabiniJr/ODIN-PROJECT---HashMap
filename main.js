import HashMap from "./HashMap.js";

const hashInstance = new HashMap(.75, 16);

console.log(hashInstance.hash("Rama"));
console.log(hashInstance.hash("Sita"));
// console.log(hashInstance.entries()[0]);
hashInstance.set("Carlos", "This is an old value");
console.log(hashInstance.get("Carlos"));
hashInstance.set("Carlos", "This is the new value");
console.log(hashInstance.get("Carlos"));