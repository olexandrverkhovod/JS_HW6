// Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом. 
// 1. Функция сложения 2-х объектов-дробей.
// 2. Функция вычитания 2-х объектов-дробей.
// 3. Функция умножения 2-х объектов-дробей.
// 4. Функция деления 2-х объектов-дробей.
// 5. Функция сокращения объекта-дроби.


let fraction = {
    numerator1: parseInt(prompt("Введите числитель первой дроби")),
    denominator1: parseInt(prompt("Введите знаменатель первой дроби")),
    numerator2: parseInt(prompt("Введите числитель второй дроби")),
    denominator2: parseInt(prompt("Введите знаменатель второй дроби")),
};

function reduction1(fraction) {
    let n = fraction.numerator1,
        d = fraction.denominator1;
    for (var i = 2; i <= n; i++) {
        if (n % i === 0 && d % i === 0)
            n1 = n / i, d1 = d / i;
    }
    document.getElementById("reduction1").innerHTML = (`Первая дробь "${n} / ${d}" сокращена до "${n1} / ${d1}"`);
}

function reduction2(fraction) {
    let n = fraction.numerator2,
        d = fraction.denominator2;
    for (var i = 2; i <= n; i++) {
        if (n % i === 0 && d % i === 0)
            n2 = n / i, d2 = d / i;
    }
    document.getElementById("reduction2").innerHTML = (`Вторая дробь "${n} / ${d}" сокращена до "${n2} / ${d2}"`);
}

function sum(fraction) {
    if ((fraction.denominator1) == (fraction.denominator2)) {
        d3 = fraction.denominator1;
        n3 = fraction.numerator1 + fraction.numerator2;
    }

    else {
        d3 = fraction.denominator1 * fraction.denominator2;
        n3 = fraction.numerator1 * fraction.denominator2 + fraction.numerator2 * fraction.denominator1;
    };

    for (var i = 2; i <= n3; i++) {
        if (n3 % i === 0 && d3 % i === 0)
            n = n3 / i, d = d3 / i;
    }
    document.getElementById("sum").innerHTML = (`Результат суммы "${n} / ${d}"`);
}

function difference(fraction) {
    if ((fraction.denominator1) == (fraction.denominator2)) {
        d4 = fraction.denominator1;
        n4 = fraction.numerator1 - fraction.numerator2;
    }

    else {
        d4 = fraction.denominator1 * fraction.denominator2;
        n4 = fraction.numerator1 * fraction.denominator2 - fraction.numerator2 * fraction.denominator1;
    };

    for (var i = 2; i <= n4; i++) {
        if (n4 % i === 0 && d3 % i === 0)
            n = n4 / i, d = d4 / i;
    }
    document.getElementById("difference").innerHTML = (`Результат отнимания дробей "${n} / ${d}"`);
}