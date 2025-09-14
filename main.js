import { HashMap, HashSet } from './classes.js';

const test = HashMap();
test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('kite', 'pink');
test.set('lion', 'golden');
test.set('cat', 'orange');
console.log(test.length());
test.remove('dog');
console.log(test.get('carrot'));
console.dir(test, { depth: null });

const hashSet = HashSet(HashMap);
hashSet.methods.set('apple');
hashSet.set('banana');
hashSet.set('carrot');
hashSet.set('dog');
console.dir(test, { depth: null });
