#!/usr/bin/node

function HashMap() {
	let loadFactor;
	let capacity;

	const hash = function getHashCode(key) {
		let hashCode = 0;
		const primeNumber = 31;
		for (let i = 0; i < key.length; i++) {
			hashCode = primeNumber * hashCode + key.charCodeAt(i);
			hashCode %= 16;
		}
		return hashCode;
	};

	return { hash, capacity, loadFactor };
}
