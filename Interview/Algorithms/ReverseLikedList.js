const { SinglyList } = require('./LinkedList.js');

const newLL = new SinglyList();

newLL.insertLast('a');
newLL.insertLast('b');
newLL.insertLast('c');
newLL.insertLast('d');
newLL.insertLast('e');

// console.log('newLinkedList', newLL, newLL.size());

function reverseLinkedList(head) {
  let node = head;
  let previous = null;

  while (node) {
    let nodeNext = node.next;
    node.next = previous;

    previous = node;
    node = nodeNext;
  }

  return previous;
}

let reversedHead = reverseLinkedList(newLL.head);

// console.log('reversedLL', reversedLL, reversedLL.size());

while (reversedHead) {
  console.log('reversedLL', reversedHead.data);
  reversedHead = reversedHead.next;
}

console.log('------------')

const rNewLL = new SinglyList();

rNewLL.insertLast('a');
rNewLL.insertLast('b');
rNewLL.insertLast('c');
rNewLL.insertLast('d');
rNewLL.insertLast('e');

function reverseLinkedListRecursively(head) {
  if (!head || !head.next) {
    return head;
  }

  let reversedHead = reverseLinkedListRecursively(head.next);

  head.next.next = head;
  head.next = null;

  return reversedHead;
}

let rReversedHead = reverseLinkedListRecursively(rNewLL.head);

while (rReversedHead) {
  console.log('rReversedHead', rReversedHead.data);
  rReversedHead = rReversedHead.next;
}
