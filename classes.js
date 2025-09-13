#!/usr/bin/node
import { linkedList, Node } from './linked-list.js';

function HashMap() {
	let capacity = 16;
	let loadFactor = capacity * 0.8;
	let hashArray = [];

	for (let i = 0; i < capacity; i++) {
		hashArray.push({});
	}

	const hash = function getHashCode(key) {
		let hashCode = 0;
		const primeNumber = 31;
		for (let i = 0; i < key.length; i++) {
			hashCode = primeNumber * hashCode + key.charCodeAt(i);
			hashCode %= 16;
		}
		return hashCode;
	};

	const set = function setKey(key, value) {
		const hashCode = hash(key);
		let temp = hashArray[hashCode];
		if (Object.hasOwn(temp, 'head')) {
			temp = temp.head;
			while (temp.nextNode != null && temp[key]) {
				temp = temp.nextNode;
			}
			if (temp[key]) return (temp[key] = value);
			return (temp.nextNode = Node(key, value));
		}
		const list = linkedList();
		return (hashArray[hashCode] = list.append(key, value));
	};

	const get = function getValue(key) {
		const hashCode = hash(key);
		if (Object.hasOwn(hashArray[hashCode], 'head')) {
			let temp = hashArray[hashCode].head;
			let found = null;
			do {
				if (temp[key]) return (found = temp[key]);
				temp = temp.nextNode;
			} while (temp.nextNode != null);
			return found;
		}
	};

	const has = function hasKey(key) {
		const hashCode = hash(key);
		let temp = hashArray[hashCode].head;
		if (temp == undefined) return false;
		do {
			if (temp[key]) return true;
			temp = temp.nextNode;
		} while (temp.nextNode != null);
		return false;
	};

	const remove = function removeEntry(key) {
		const hashCode = hash(key);
		if (hashCode == undefined) return false;
		let curr = hashArray[hashCode].head;
		let next = curr.nextNode;
		do {
			if (curr[key] && next == null) {
				delete hashArray[hashCode].head;
				return true;
			} else if (curr[key] && next != null) {
				curr.nextNode = next.nextNode;
				return true;
			} else {
				curr = next;
				next = next.nextNode;
			}
		} while (next != null);
		return false;
	};

	const length = function getLength() {
		let storedKeys = 0;
		hashArray.forEach((bucket) => {
			let curr = bucket.head;
			if (curr == undefined) return;
			while (curr != undefined) {
				storedKeys += 1;
				curr = curr.nextNode;
			}
		});
		return storedKeys;
	};

	const clear = function clearMap() {
		hashArray.forEach((bucket) => {
			if (bucket.head == undefined) return;
			delete bucket.head;
		});
	};

	const keys = function getKeys() {
		let arrayOfKeys = [];
		hashArray.forEach((bucket) => {
			if (bucket.head == undefined) return;
			let curr = bucket.head;
			while (curr != undefined) {
				let [first] = Object.keys(curr);
				arrayOfKeys.push(first);
				curr = curr.nextNode;
			}
		});
		return arrayOfKeys;
	};

	const values = function getValues() {
		let arrayOfValues = [];
		hashArray.forEach((bucket) => {
			if (bucket.head == undefined) return;
			let curr = bucket.head;
			while (curr != undefined) {
				let [first] = Object.values(curr);
				arrayOfValues.push(first);
				curr = curr.nextNode;
			}
		});
		return arrayOfValues;
	};

	const entries = function getEntries() {
		let arrayOfEntries = [];
		hashArray.forEach((bucket) => {
			if (bucket.head == undefined) return;
			let curr = bucket.head;
			while (curr != undefined) {
				let [first] = Object.entries(curr);
				arrayOfEntries.push(first);
				curr = curr.nextNode;
			}
		});
		return arrayOfEntries;
	};

	return {
		set,
		get,
		has,
		remove,
		length,
		clear,
		keys,
		values,
		entries,
		hashArray,
	};
}

const hashTable = HashMap();
hashTable.set('apple', 'red');
hashTable.set('apple', 'yellow');
hashTable.set('elppa', 'blue');
hashTable.set('carrot', 'orange');
console.log(hashTable.get('apple'));
console.log(hashTable.has('apple'));
console.log(hashTable.remove('apple'));
console.log(hashTable.length());
console.log(hashTable.keys());
console.log(hashTable.values());
console.log(hashTable.entries());
hashTable.clear();
console.dir(hashTable.hashArray, { depth: null });
