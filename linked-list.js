export function linkedList(key, value) {
	let head = Node(key, value);

	return { head };
}

export function Node(key, value = null, nextNode = null) {
	return { [key]: value, nextNode };
}
