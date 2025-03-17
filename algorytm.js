// Функція для знаходження LCM ітераційним методом
function algorytm(a, b) {
    let lcm = Math.max(a, b);
    while (lcm % a !== 0 || lcm % b !== 0) {
        lcm++;
    }
    return lcm;
}

// Введення чисел
let num1 = 12;
let num2 = 18;

console.log("Найменше спільне кратне:", algorytm(num1, num2));