// - Створити функцію яка отримує вік користувача і повертає рік народження(Наприклад getBornYear(23) => 2000)
function getBornYear(value) {
    let nowDate = new Date();
    let year = nowDate.getFullYear();
    return `Born year ${year - value}`
}
console.log(getBornYear(23));
console.log(getBornYear(18));
console.log(getBornYear(34));
console.log(getBornYear(17));
console.log(getBornYear(24));


//     - Створити функцію яка  отримує  массив і повертає массив в якому  всі текстові значення приведені до верхнього регістру.
function transormArr(arr) {
    let newArr = [];
    for (let iterator of arr) {
        newArr.push(iterator.toUpperCase());
    }
    return newArr;
}

console.log(transormArr(['Test', 'hello world', 'menu']));
//         - Напишіть функцію lowEnd(str) яка повертає рядок str з останнім символом у верхньому регістрі
function lowEnd(str) {
    let strArr = str.split('');
    strArr[strArr.length - 1] = strArr[strArr.length - 1].toUpperCase();
    let resultStr = strArr.join('');
    console.log(resultStr);
}
lowEnd('ukraine');

//             - Напишіть функцію cutStr(str, number) яка отримує стрінг значення і число та повертає кількість перших літер з строки + ... кількість літер відповідаж значенню number cutStr('hello', 2) => he...
function cutStr(str, number) {
    if (str.length <= number) {
        return str;
    }
    else {
        let truncate = `${str.substring(0, number)}...`;
        return truncate;
    }
}
console.log(cutStr('Hello', 2));