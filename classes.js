#!/usr/bin/node
import { linkedList, Node } from './linked-list.js';

export function HashMap() {
	let capacity = 16;
	let loadFactor = Math.round(capacity * 0.75);
	let hashArray = [];

	const grow = function growMap(size = capacity) {
		for (let i = 0; i < size; i++) {
			hashArray.push({});
		}
	};

	const hash = function getHashCode(key) {
		let hashCode = 0;
		const primeNumber = 31;
		for (let i = 0; i < key.length; i++) {
			hashCode = primeNumber * hashCode + key.charCodeAt(i);
			hashCode %= capacity;
		}
		if (hashCode < 0 || hashCode >= hashArray.length) {
			throw new Error('Trying to access index out of bounds');
		}
		return hashCode;
	};

	const set = function setKey(key, value) {
		if (length() == loadFactor) {
			/* grow method increases the array by doubling it*/
			grow(capacity);
			capacity *= 2;
			/* update is to display the keys in the new sized array*/
			update();
		}
		const hashCode = hash(key);
		let temp = hashArray[hashCode];
		// When the bucket has values
		if (Object.hasOwn(temp, 'head')) {
			temp = temp.head;
			while (temp.nextNode != undefined) {
				if (temp[key]) return (temp[key] = value);
				temp = temp.nextNode;
			}
			return (temp.nextNode = Node(key, value));
		}
		// In case of no value inside the bucket, a list with the 'key: value' pair is created
		return (hashArray[hashCode] = linkedList(key, value));
	};

	const update = function updateAfterGrow() {
		let getEntries = entries();
		clear();
		for (let i = 0; i < getEntries.length; i++) {
			let [key, value] = getEntries[i];
			set(key, value);
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
		// if there are no elements no need to look further
		if (temp == undefined) return false;
		do {
			if (temp[key]) return true;
			temp = temp.nextNode;
		} while (temp != undefined);
		return false;
	};

	const remove = function removeEntry(key) {
		// uses has method to return in case of the value not existing
		if (!has(key)) return false;
		const hashCode = hash(key);
		let curr = hashArray[hashCode].head;
		let prev = null;
		do {
			if (curr[key]) {
				// checks if is the only element
				if (prev == null && curr.nextNode == null)
					return delete hashArray[hashCode].head;
				// checks if its the first element
				else if (prev == null && curr.nextNode != null)
					return (hashArray[hashCode].head = curr.nextNode);
				// checks middle elements
				else return (prev.nextNode = curr.nextNode);
			}
			prev = curr;
			curr = curr.nextNode;
		} while (curr.nextNode != undefined);
		// if no conditions are met it means its last
		prev.nextNode = null;
		return true;
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

	grow();

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

export function HashSet() {
	let methods = HashMap();
	return { methods };
}
