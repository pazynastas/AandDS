class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    sumGreaterThanOrEqual(threshold) {
        let sum = 0;
        let current = this.head;
        while (current) {
            if (current.value >= threshold) {
                sum += current.value;
            }
            current = current.next;
        }
        return sum;
    }
}

// Приклад використання
const list = new LinkedList();
list.append(10);
list.append(20);
list.append(15);
list.append(5);
list.append(30);

console.log("Сума елементів >= 15:", list.sumGreaterThanOrEqual(15));