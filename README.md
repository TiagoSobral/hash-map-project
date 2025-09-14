# 📚 Hash Map Project (The Odin Project)

This project is part of [The Odin Project](https://www.theodinproject.com/) curriculum.  
The goal is to build use **Hash Map** data structure to build a *Hash Table*.
The request is to create a factory function or class, and utility methods.

## 🚀 Features

The project implements the factories this time (choice to challenge myself):

- **`LinkedList()`**  
  Represents the full list. Contains the nodes.  

- **`Node(key, value, nextNode)`**  
  Represents an individual node in the list.
  - `key` → is the key that will be *hashed*
  - `value` → the value of that key (defaults to `null`).
  - `nextNode` → points to the next node (defaults to `null`).  

## 🛠️ Implemented Methods

1. **`hash(key)`** → `Hashes` the value and turns it into a number (it accounts for collisions with multiplication & modulo) 
1. **`set(key, value)`** → Adds a key value pair to the `HashTable`(if empty it creates a new linked list, otherwise a node). Remember to grow your buckets to double their capacity when your hash map reaches the load factor. 
2. **`get(key)`** → Returns the value assigned to the key otherwise returns null.  
3. **`has(key)`** → Takes a key as an argument and returns true or false based on whether or not the key is in the hash map.
4. **`remove(key)`** → Takes a key as an argument. If the given key is in the hash map, it should remove the entry with that key and return true. If the key isn’t in the hash map, it should return false.
5. **`length()`** → Returns the number of stored keys in the hash map. 
6. **`clear()`** → Removes all entries in the hash map. 
7. **`keys()`** → Returns an array containing all the keys inside the hash map. 
8. **`values()`** → Returns an array containing all the values.
9. **`entries() `** → Returns an array that contains each key, value pair.
`Example:` ```[[firstKey, firstValue], [secondKey, secondValue]]```

## 🛠️ Own Added Methods
1. **`grow()`** → grows the `HashMap` when called.
2. **`update()`** → stores all the entries in a variable by calling **`entries()`**, calls **`clear()`** to clear the `HashMap` and calls **`set(key, value)`** iteratively to repopulate the values again in the updated table.

### 🔥 Extra Credit
Create a **`HashSet`** class or factory function that behaves the same as a **`HashMap`** but only contains keys with no values.
