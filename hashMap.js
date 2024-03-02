import LinkedList from "./linkedlist.js";

class HashMap {
  constructor(capacity = 16, loadFactor = 0.75) {
    this.loadFactor = loadFactor;
    this.capacity = capacity;
    this.occupied = 0;
    this.bucketArray = new Array(capacity).fill(null);
  }

  static hash(key) {
    if (Number.isInteger(key)) return key;
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
    return hashCode;
  }

  resizeHashMap() {
    if (this.occupied >= this.capacity * this.loadFactor) {
      const oldBucketArray = this.bucketArray;
      this.capacity *= 2;
      this.occupied = 0;
      this.bucketArray = new Array(this.capacity).fill(null);

      oldBucketArray.forEach((bucket) => {
        let currentBucket = bucket;
        if (currentBucket !== null) currentBucket = bucket.nodeList;
        while (currentBucket != null) {
          this.set(currentBucket.hashKey, currentBucket.value);
          currentBucket = currentBucket.nextNode;
        }
      });
    }
  }

  set(key, value) {
    const hashedKey = HashMap.hash(key);
    const bucketIndex = hashedKey % this.capacity;
    if (this.bucketArray[bucketIndex] === null)
      this.bucketArray[bucketIndex] = new LinkedList();
    this.bucketArray[bucketIndex].append(value, hashedKey);
    this.occupied++;
    this.resizeHashMap();
  }

  get(key) {
    const hashedKey = HashMap.hash(key);
    const bucket = this.bucketArray[hashedKey % this.capacity];
    if (bucket === null) return null;
    let node = bucket.nodeList;
    while (node !== null) {
      if (node.hashKey === hashedKey) return node.value;
      node = node.nextNode;
    }
    return null;
  }

  has(key) {
    //
  }

  remove(key) {
    // check capacity etc
  }

  length() {
    //
  }

  clear() {
    // check capacity etc
  }

  keys() {
    //
  }

  values() {
    //
  }

  entries() {
    //
  }
}

const testOne = new HashMap(4);
testOne.set("key", "value");
testOne.set("second", "value2");
testOne.set("three", "value12");
testOne.set("four", "value112");
testOne.set("fout", "value113");
console.log(testOne.get("key"));
console.log(testOne.get("kee"));
console.log(testOne.get("2"));
// console.log(testOne.bucketArray);
// console.log(testOne.bucketArray[0].nodeList

const testTwo = new HashMap(2);
testTwo.set("test", "old value");
testTwo.set("test", "new value");
testTwo.set("testt", "another value");
// console.log(testTwo.bucketArray)
