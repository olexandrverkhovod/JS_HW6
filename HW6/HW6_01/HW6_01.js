// Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции  для работы с этим объектом.
//    1. Функция для вывода на экран информации об автомобиле.
//    2. Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. 
//    Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час. 


let theCar = {
    brand: 'Mercedes-Benz',
    model: 'CLK GTR',
    year: '1999',
    averageSpeed: 173
}

let distance, time;

function infoCar(theCar) {
    document.getElementById("info").innerHTML = (`Производитель: ${theCar.brand}<br>Модель: ${theCar.model}<br>Год выпуска: ${theCar.year}<br>Средняя скорость: ${theCar.averageSpeed} км/ч<br><br><img src="clk_gtr.jpg" alt="clk_gtr">`);
}

function trip(theCar) {
    distance = prompt('Какую дистанцию, в км, вы расчитываете преодолеть?');
    time = Math.round(distance / theCar.averageSpeed);

    document.getElementById("time").innerHTML = (`Вам понадобится ${time >= 4 ? time = time + Math.floor(time / 4) : time} часов, что бы преодолеть ${distance} км`)
}