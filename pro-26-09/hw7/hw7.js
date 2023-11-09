// 1) Створити функцію яка з массиву вибирає всі булеві значення
// const sort = [true, 'false', 111, -0, 'true', false, { a: flase }, [true, 'false']];

const sort = [true, 'false', 111, -0, 'true', false, { a: false }, [true, 'false']];

function selectBoolean(value) {
    return value.filter(item => item === true || item === false);
}
let filterValue = selectBoolean(sort);
console.log(filterValue);
// 2) Створити функцію яка повертає сторіччя, функція отримує рік
// // 1810->19
// // 1700 -> 17
// // 1601 ->17
// // 2000 -> 20

function convertYear(year) {
    return Math.round(year / 100);
}
console.log(convertYear(1810));
console.log(convertYear(1700));
console.log(convertYear(1601));
console.log(convertYear(2000));
// 3) створити класс конструктор filmMaker який отримує, назву фільма, рік виходу, рейтинг.Всередині классу створити get метод який виводить всю інформацію про класс
class filmMaker {
    constructor(filmName, year, rating) {
        this.filmname = filmName;
        this.year = year;
        this.rating = rating;
    }
    get infoFilm() {
        return `${this.filmName} was created in ${this.year} end rating ${this.rating} `;
    }
}
let titanik = new filmMaker('Titanik', 1997, 8.6);
console.log(titanik);
console.log(titanik.infoFilm);

// 4) Створити класс filmDetail який наслідує filmMaker  і отримує ще поля жанр фільму, вікова категорія, в классі створити get який повертає обєкт з усіма ключами значень з filmMaker і filmDetail

class FilmDetail extends filmMaker {
    constructor(filmName, year, rating, type, restriction) {
        super(filmName, year, rating)
        this.type = type
        this.restriction = restriction
    }
    get allInfo() {
        return `${this.filmName} was created in ${this.year} rating ${this.rating} type ${this.type} restriction ${this.restriction} `;
    }
}
let moreDetall = new FilmDetail('Titanik', 1997, 8.6, 'feature film', '12+');
console.log(moreDetall);