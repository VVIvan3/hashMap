class HashMap {
  constructor(capacity = 16, loadFactor = 0.75, ) {
    this.loadFactor = loadFactor
    this.capacity = capacity
    this.bucketArray = new Array(capacity).fill(null)
  }

  static hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
    return hashCode;
  }

  set(key, value) {
    //
  }

  get(key) {
    //
  }

  has(key) {
    //
  }

  remove(key) {
    //
  }

  length() {
    //
  }

  clear() {
    //
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

const testOne = new HashMap();
console.log(testOne.bucketArray)