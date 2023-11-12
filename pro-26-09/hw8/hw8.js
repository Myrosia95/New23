// Створити код, що створює 50 елементів div на сторінці з різним кольором(реалізувати функцію для цього) з стилями: ширина 100рх і висота 100рх і бордер радіус 100 %.Всі ці значення задати через js.
window.onload = function () {
    function randomColor() {
        let violet = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let brown = Math.floor(Math.random() * 256);
        return `rgb(${violet}, ${green}, ${brown})`;
    }
    let divColor = document.querySelector('.container');
    for (let i = 0; i < 50; i++) {
        let div = document.createElement('div');
        div.style.width = '100px';
        div.style.height = '100px';
        div.style.borderRadius = '100%';
        div.style.backgroundColor = randomColor();
        divColor.appendChild(div);
    }
    // Створити тег header а в середені нього 3 тага A яким задати за допомгою js атрібут href і target.
    let links = [
        {
            linkName: 'Prog Academy',
            link: 'https://prog.academy/ua'
        },
        {
            linkName: 'Навчальні програми',
            link: 'https://prog.academy/ua#courses'
        },
        {
            linkName: 'Курс Fullstack',
            link: 'https://prog.academy/fullstack-online'
        },
    ];
    let body = document.querySelector('body');
    let headerEl = document.createElement('header');
    headerEl.style.padding = '50px';
    headerEl.style.backgroundColor = 'lightgray';
    headerEl.style.textAlign = 'center';
    body.appendChild(headerEl);

    for (let i = 0; i < links.length; i++) {
        let linkEl = document.createElement('a');
        linkEl.style.display = 'inline-block';
        linkEl.style.padding = '10px';
        linkEl.innerHTML = links[i].linkName;
        linkEl.setAttribute('href', links[i].link);
        linkEl.setAttribute('target', '_blank');
        headerEl.append(linkEl);
    }
    // Створити список ul  в html руками на 5 елементів і написати js код який видаляє 2 останніх елемента .
    function removeLastChild() {
        let header = document.querySelector('header');
        let lastUl = header.lastElementChild;
        if (lastUl !== null) {
            header.removeChild(lastUl);
        }
    }
    removeLastChild();
    removeLastChild();



}









