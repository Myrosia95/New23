// // За допомогою циклу вивести значення від 10 до 0.
let i=0;
let text =" ";
for ( let i=10; i>0; i--){
  console.log (`Hello from ${i}`);
}
// // Створити пустий массив і заповнити його всіма парними занченнями від 0 до 8.
let Values=[];
for (i=0; i<9; i++) {
    if (i%2 == 0) {
        Values.push(i)
    }
}
console.log( Values)
// -  Створити цикл який виводить значення в консоль з двох масивів в такому  форматі "Сьогодні ....  у вас такі плани ..." 
let days = ["Понеділок", "Середа", "Неділя"] 
let plans = ["Урок 03", "Урок 04", "Вихідний"]

for(let i = 0; i<days.length; i++){
console.log(`Сьогодні ${days[i]}  у вас такі плани ${plans[i]}`)
}
// -  Написати цикл який замінює відємне значення в масиві на 0 
let checkArr = [69, 96, -66, 77, 85, -85, 14, -20, 90, -36]
for(let i = 0; i<checkArr.length; i++){
    if(checkArr[i]<0){
        checkArr[i] = 0;
    }
}
console.log(`Відсортований масив ${checkArr}`);
// - створити змінну в якій за допогою Prompt спитати який день неділі зараз. Далі написати swith який для вівторок четверг значень виводить ( Сьогодні ${day} у вас урок о 19) для інших днів свої варіанти,  а для значень що не відповідають умові виведіть default

let today = prompt('Який день неділі зараз?');

switch (today) {
    case 'вівторок':
    case 'Вівторок':
    case 'Четвер':
    case 'четвер':
        console.log(`Сьогодні ${today} у вас урок о 19`);
        break;
        default:
            console.log('No information about day');
            break;
}