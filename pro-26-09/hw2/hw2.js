// - напишіть змінні які питають логін та пароль з prompt  якщо логін admin і пароль 12345 вірні то виводити повідомлення "вітаємо в системі" якщо ні то виводити "Пароль логін не вірні"

// let userName = prompt('Type user name');
// let userPasword = prompt('Type pasword');

// if (userName == 'admin' && userPasword == '12345')
//     console.log(`Вітаю в системі ${userName == 'admin' && userPasword == '12345'}`);
// else {
//     console.log("Пароль чи логін не вірні")
// }

//     - Спитати в користувача вік, далі використовуючи тернарний оператор(це скорочений запис іf) створити змінну яка отримує true якщо вік більше 18  i false якщо менше

// let userAge = prompt('Type age');
// if (Number(userAge) > 18) {
//     console.log(`Ваш вік не підходить ${Number(userAge) > 18}`);
// }
// else {
//     console.log("Ваш вік не підходить")
// }

//         - Отримати від користувача число яке більше 0 і якщо воно більше 100 то порахувати знижку 3 % від числа та вивести в консоль якщо більше 3000 то порахувати знижку 5 % і якщо більше 10000 то порахувати знижку 7 % в усіх інших випадках вивести: "У вас нема знижки до сплати число яке було введене"

let shopPrise = Number(prompt('Total price'));

if (shopPrise > 0 && shopPrise < 100) {
    console.log('Sale 3%');
}
else if (shopPrise > 100 && shopPrise < 10000) {
    console.log('Sale 5%');
}
else if (shopPrise > 10000) {
    console.log('Sale 7%');
}
else {
    console.log(`У вас немає знижки до сплати число, яке було введене ${shopPrise}`);
}

