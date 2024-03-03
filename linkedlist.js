export default class LinkedList {
  constructor() {
    this.nodeList = null;
  }

  append(value, hashKey) {
    const appendingNode = new Node(value, hashKey);
    let node = this.nodeList;
    if (this.nodeList === null) {
      this.nodeList = appendingNode;
    } else {
      while (node.nextNode != null) {
        if (node.hashKey === hashKey) {
          node.value = value;
          return;
        }
        node = node.nextNode;
      }
      if (node.hashKey === hashKey) {
        node.value = value;
        return;
      }
      node.nextNode = appendingNode;
    }
  }

  removeAt(hashCode) {
    let currentNode = this.nodeList;
    let prevNode = currentNode;
    if (currentNode.hashKey === hashCode) {
      this.nodeList = currentNode.nextNode;
      return true;
    }
    while (currentNode !== null) {
      if (currentNode.hashKey === hashCode) {
        prevNode.nextNode = currentNode.nextNode;
        return true;
      }
      prevNode = currentNode;
      currentNode = currentNode.nextNode;
    }
    return false;
  }
}

class Node {
  constructor(value, hashKey = undefined, nextNode = null) {
    this.value = value;
    this.hashKey = hashKey;
    this.nextNode = nextNode;
  }
}
