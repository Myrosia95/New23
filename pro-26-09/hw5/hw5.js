// Створити функцію конструктор яка створює обєкт юзер(з даними імя, прізвище, вік, email  в функції конструкторі повиний бути метод виводу інформації про юзера, метод повинен бути винесений в прототип.
function ObjUserConstructor(userName, userSurname, userAge, userEmail) {
    this.userName = userName;
    this.userSurname = userSurname;
    this.userAge = userAge;
    this.userEmail = userEmail;

    ObjUserConstructor.prototype.userInfo = function () {
        return (`User name : ${this.userName}, surname : ${this.userSurname}, age: ${this.userAge}, email: ${this.userEmail}`)
    }
}
let userA = new ObjUserConstructor('Tom', 'Bobrenko', '25', 'tom_b@gmail.com');


console.log(userA);

// Створіть 5 користувачів помістіть їх в массив, а далі використовуючи цикли розглнуті на уроці пройдуть цей массив і збережіть юзер інфо обєкта(дані з метода в 1 завданні)  в новому масиві

let user1 = new ObjUserConstructor('Ivan', 'Bobrenko', '37', 'tom_b@gmail.com');
let user2 = new ObjUserConstructor('Tim', 'Bobrenko', '12', 'tom_b@gmail.com');
let user3 = new ObjUserConstructor('Alla', 'Bobrenko', '53', 'tom_b@gmail.com');
let user4 = new ObjUserConstructor('Tommy', 'Bobrenko', '21', 'tom_b@gmail.com');
let user5 = new ObjUserConstructor('Tomas', 'Bobrenko', '95', 'tom_b@gmail.com');

let users = [user1, user2, user3, user4, user5];

let usersInfoArr = users.map((user) => { return user.userInfo() });

console.log(usersInfoArr);

// Створити функцію сорт, яка посортує массив з створеними обєктами юзер по віку(в порядку зростання).

let newSort = [];
for (const user of users) {
    newSort.push(`${user.userAge}`);
}
console.log(newSort);

let sortUsers = users.sort((a, b) => a.userAge - b.userAge);
console.log(sortUsers);