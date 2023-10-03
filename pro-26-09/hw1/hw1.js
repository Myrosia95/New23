// змінні із значенням та їх сума
let a = 5;
let b = 7;
let c = 9;
let d = 2;

let summ = a + b + c + d;
console.log(`Сума всіх чисел = ${summ}`);
console.log(`Сума всіх чисел = ${a + b + c + d}`);

// середнє арифметичне
// let midValue = (a+b+c+d)/4;
let midValue = summ / 4;

console.log(`Середнє арифметичне = ${midValue}`);
console.log(`Середнє арифметичне = ${(a + b + c + d) / 4}`);

// Створити змінну в якій розмістити розмір знижки будь-яке числове число, отримати від користувача ( за допомогою prompt )  кількість товарів і вартість товару,  вивести в консоль сумму товару - знижка.

let discount = 30;
let count = prompt('Кількість товару');
let prise = prompt('Вартість товару');
let totalPrise = Number(count) * Number(prise);
let discountPrice = totalPrise - (totalPrise * discount) / 100;
console.log(`сума до оплати ${discountPrice}`);