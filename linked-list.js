export function linkedList() {
	let head;
	const append = (value, nextNode) => {
		debugger;
		if (head == undefined) {
			return (head = Node(value, nextNode));
		}
		head.nextNode = Node(value, nextNode);
		return { head };
	};
	return { append };
}

function Node(value = null, nextNode = null) {
	return { value, nextNode };
}
