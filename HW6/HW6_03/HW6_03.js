// Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом. 
// 1. Функция вывода времени на экран.
// 2. Функция изменения времени на переданное количество
// секунд.
// 3. Функция изменения времени на переданное количество
// минут.
// 4. Функция изменения времени на переданное количество
// часов.
// Учтите, что в последних 3-х функциях, при изменении одной
//  части времени, может измениться и другая. Например: если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».

let time = {
    hours: 1,
    minutes: 0,
    seconds: 0
}

function PrintTime(time) {
    let printSec = time.seconds < 10 ? "0" + time.seconds : time.seconds,
        printMin = time.minutes < 10 ? "0" + time.minutes : time.minutes,
        printHour = time.hours < 10 ? "0" + time.hours : time.hours;

    document.getElementById('print').innerHTML = (`Объект содержит следующее время - ${printHour} : ${printMin} : ${printSec}`);
}

function ChangeSeconds(time) {
    let seconds = +prompt('Введите кол-во секунд на которое хотите увеличить время.');
    time.seconds += seconds;
    if (time.seconds < 60) {
        PrintTime(time);
    } else if (time.seconds >= 60) {
        for (let i = 1; time.seconds >= 60; i++) {
            time.seconds -= 60;
            time.minutes += i;
            if (time.minutes >= 60) {
                time.minutes = 0;
                time.hours += 1;
            }
            if (time.hours >= 24) {
                time.hours = 0;
            }
        }
        PrintTime(time);
    }
}

function ChangeMinutes(time) {
    let minutes = +prompt('Введите кол-во минут на которое хотите увеличить время.');
    time.minutes += minutes;
    if (time.minutes < 60) {
        PrintTime(time);
    } else if (time.minutes >= 60) {
        for (let i = 1; time.minutes >= 60; i++) {
            time.minutes -= 60;
            time.hours += i;
            if (time.hours >= 24) {
                time.hours = 0;
            }
        }
        PrintTime(time);
    }
}

function ChangeHours(time) {
    let hours = +prompt('Введите кол-во часов на которое хотите увеличить время.');
    time.hours += hours;
    if (time.hours < 24) {
        PrintTime(time);
    } else {
        while (time.hours >= 24) {
            time.hours -= 24;
        }
        PrintTime(time);
    }
}  