#!/usr/bin/node

function HashMap() {
	debugger;
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

	return { set, hashArray };
}

const hashTable = HashMap();
console.log(hashTable);
