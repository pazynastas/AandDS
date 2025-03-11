class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }

    removeFirst(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                if (current.prev) {
                    current.prev.next = current.next;
                } else {
                    this.head = current.next;
                }
                if (current.next) {
                    current.next.prev = current.prev;
                } else {
                    this.tail = current.prev;
                }
                return;
            }
            current = current.next;
        }
    }

    printList() {
        let current = this.head;
        const result = [];
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        console.log(result.join(' <-> '));
    }
}

// Приклад використання
const list = new DoublyLinkedList();
list.append(5);
list.append(10);
list.append(15);
list.append(10);
list.append(20);

console.log("Перед видаленням:");
list.printList();

list.removeFirst(10);

console.log("Після видалення:");
list.printList();