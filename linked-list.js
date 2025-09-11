export function linkedList() {
	let head;
	const append = (value, nextNode) => {
		if (head == undefined) {
			head = Node(value, nextNode);
			return { head };
		}
		head.nextNode = Node(key, value, nextNode);
		return { head };
	};
	return { append };
}

export function Node(key, value = null, nextNode = null) {
	return { [key]: value, nextNode };
}
