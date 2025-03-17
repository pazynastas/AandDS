<<<<<<< HEAD
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Queue {
    constructor() {
        this.items = [];
    }

    // Додавання нового товару у чергу
    enqueue(product) {
        this.items.push(product);
    }

    // Видалення першого елемента з черги
    dequeue() {
        if (this.isEmpty()) {
            return "Черга порожня";
        }
        return this.items.shift();
    }

    // Перевірка, чи є черга порожньою
    isEmpty() {
        return this.items.length === 0;
    }

    // Перегляд даних черги
    displayQueue() {
        console.log("Товари у черзі:");
        this.items.forEach((product, index) => {
            console.log(`${index + 1}. Назва: ${product.name}, Вартість: ${product.price}`);
        });
    }

    // Очистка черги
    clear() {
        this.items = [];
    }

    // Обчислення загальної вартості товарів із однаковою назвою
    calculateTotalPriceByName(productName) {
        return this.items
            .filter(product => product.name === productName)
            .reduce((total, product) => total + product.price, 0);
    }
}

function main() {
    const queue = new Queue();

    // Додавання товарів у чергу
    queue.enqueue(new Product("Молоко", 30));
    queue.enqueue(new Product("Хліб", 20));
    queue.enqueue(new Product("Молоко", 35));
    queue.enqueue(new Product("Яблуко", 15));
    queue.enqueue(new Product("Молоко", 40));

    // Перегляд черги
    console.log("Дані перед видаленням:");
    queue.displayQueue();

    // Обчислення загальної вартості товару "Молоко"
    console.log(`Загальна вартість "Молоко": ${queue.calculateTotalPriceByName("Молоко")} грн`);

    // Видалення товару з черги
    queue.dequeue();
    console.log("Дані після видалення першого товару:");
    queue.displayQueue();

    // Очистка черги
    queue.clear();
    console.log("Дані після очищення черги:");
    queue.displayQueue();
}

main();
=======

function algorytm(a, b) {
    let lcm = Math.max(a, b);
    while (lcm % a !== 0 || lcm % b !== 0) {
        lcm++;
    }
    return lcm;
}

let num1 = 12;
let num2 = 18;

console.log("Найменше спільне кратне:", algorytm(num1, num2));
>>>>>>> 2b963fa (practical_3)
