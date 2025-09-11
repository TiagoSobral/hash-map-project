export function linkedList() {
	let head;
	const append = (value, nextNode) => {
		if (head == undefined) {
			head = Node(value, nextNode);
			return { head };
		}
		head.nextNode = Node(value, nextNode);
		return { head };
	};
	return { append };
}

export function Node(value = null, nextNode = null) {
	return { value, nextNode };
}
