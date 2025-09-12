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
		if (Object.hasOwn(hashArray[hashCode], 'head')) {
			hashArray[hashCode].head = Node(key, value);
		} else {
			const list = linkedList();
			hashArray[hashCode] = list.append(key, value);
		}
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
		if (!has(key)) return false;
		const hashCode = hash(key);
		let curr = hashArray[hashCode].head;
		let next = curr.nextNode;
		while (!Object.hasOwn(curr, key) && next != null) {
			curr = next;
			next = next.nextNode;
		}
		if (next == null) {
			curr.nextNode = null;
		} else {
			curr.nextNode = next.nextNode;
		}
		return true;
	};

	return { set, get, has, remove, hashArray };
}

const hashTable = HashMap();
hashTable.set('apple', 'red');
hashTable.set('apple', 'yellow');
hashTable.set('carrot', 'orange');
console.log(hashTable.get('apple'));
console.log(hashTable.has('apple'));
console.log(hashTable.remove('apple'));
console.dir(hashTable, { depth: null });
