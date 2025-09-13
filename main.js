import { HashMap } from './classes.js';

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
