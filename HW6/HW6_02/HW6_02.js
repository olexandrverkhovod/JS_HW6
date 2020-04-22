// Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом. 
// 1. Функция сложения 2-х объектов-дробей.
// 2. Функция вычитания 2-х объектов-дробей.
// 3. Функция умножения 2-х объектов-дробей.
// 4. Функция деления 2-х объектов-дробей.
// 5. Функция сокращения объекта-дроби.


let fraction1 = {
    numerator: parseInt(prompt("Введите числитель первой дроби")),
    denominator: parseInt(prompt("Введите знаменатель первой дроби"))
};

let fraction2 = {
    numerator: parseInt(prompt("Введите числитель второй дроби")),
    denominator: parseInt(prompt("Введите знаменатель второй дроби"))
};

let temporaly = {
    numerator: ``,
    denominator: ``
};


function reduction1(fraction1) {
    document.getElementById("reduction1").innerHTML = `Дробь "${fraction1.numerator} / ${fraction1.denominator}" сокращена до "${reduction(fraction1)}"`;
}

function reduction2(fraction2) {
    document.getElementById("reduction2").innerHTML = `Дробь "${fraction2.numerator} / ${fraction2.denominator}" сокращена до "${reduction(fraction2)}"`;
}

function reduction(a) {
    let n = a.numerator,
        d = a.denominator,
        n1,
        d1;
    if (n < 0) {
        n *= -1;
    }
    for (var i = 2; i <= n; i++) {
        if (n % i === 0 && d % i === 0)
            n1 = n / i, d1 = d / i;
    }
    return `${n1} / ${d1}`;
}

function sum(fraction1, fraction2) {
    if ((fraction1.denominator) == (fraction2.denominator)) {
        temporaly.denominator = fraction1.denominator;
        temporaly.numerator = fraction1.numerator + fraction2.numerator;
    }

    else {
        temporaly.denominator = fraction1.denominator * fraction2.denominator;
        temporaly.numerator = fraction1.numerator * fraction2.denominator + fraction2.numerator * fraction1.denominator;
    };

    document.getElementById("sum").innerHTML = (`Результат суммы "${reduction(temporaly)}"`);
}

function difference(fraction1, fraction2) {
    if ((fraction1.denominator) == (fraction2.denominator)) {
        temporaly.denominator = fraction1.denominator;
        temporaly.numerator = fraction1.numerator - fraction2.numerator;
    }

    else {
        temporaly.denominator = fraction1.denominator * fraction2.denominator;
        temporaly.numerator = fraction1.numerator * fraction2.denominator - fraction2.numerator * fraction1.denominator;
    };

    document.getElementById("difference").innerHTML = (`Результат отнимания дробей "${temporaly.numerator > 0 ? reduction(temporaly) : '-' + reduction(temporaly)}"`);
}

function multiply(fraction1, fraction2) {
    temporaly.denominator = fraction1.denominator * fraction2.denominator;
    temporaly.numerator = fraction1.numerator * fraction2.numerator;

    document.getElementById("multiply").innerHTML = (`Результат умножения дробей "${reduction(temporaly)}"`);
}

function division(fraction1, fraction2) {
    temporaly.denominator = fraction1.denominator * fraction2.numerator;
    temporaly.numerator = fraction1.numerator * fraction2.denominator;

    document.getElementById("division").innerHTML = (`Результат деления дробей "${reduction(temporaly)}"`);
}