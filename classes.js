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
		let hashCode = hash(key);
		if (Object.hasOwn(hashArray[hashCode], 'head')) {
			hashArray[hashCode].head = Node(value);
		} else {
			const list = linkedList();
			hashArray[hashCode] = list.append(value);
		}
	};

	return { set, hashArray };
}

const hashTable = HashMap();
hashTable.set('apple', 'red');
hashTable.set('apple', 'yellow');
hashTable.set('carrot', 'orange');
console.dir(hashTable, { depth: null });
