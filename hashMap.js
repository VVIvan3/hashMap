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
    //
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
console.log(testOne.bucketArray);
console.log(testOne.bucketArray[0].nodeList)
// console.log(HashMap.hash("second"));
// console.log(HashMap.hash(3388687476));
