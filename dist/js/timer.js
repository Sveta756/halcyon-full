window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    //таймер 

    let deadline ='2021-03-20'; //задаем конечную дату

    // узнаем сколько времени осталось от сегодняшнего момента до дедлайна
    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),//парсе превращает любую даты в количество милисек
        seconds = Math.floor((t/1000) % 60), //округляем делим на 1000 и берем остаток, чтобы не было больше 59
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/(1000 * 60 * 60)) % 24),
        days = Math.floor((t/(1000 * 60 * 60 * 24)));

        //создаем объект со всеми значениями
        return {
            'total' : t,
            'days' : days,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

    // запихиваем значение в верстку, делаем версту динамичной

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            days = timer.querySelector('.days'),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000); //каждую секунду запускам функцию


            function updateClock() {    //функция обновления часов каждую мин
                let t = getTimeRemaining(endtime);
    
                function addZero(num){   //добавляем 0 
                            if(num <= 9) {
                                return '0' + num;
                            } else return num;
                        };
    
                days.textContent = addZero(t.days);
                hours.textContent = addZero(t.hours);  
                minutes.textContent = addZero(t.minutes);
                seconds.textContent = addZero(t.seconds);
    
                if (t.total <= 0) {
                    clearInterval(timeInterval);  //сброс таймера до нуля
                    days.textContent = '00';
                    hours.textContent = '00';
                    minutes.textContent = '00';
                    seconds.textContent = '00';
                }
            }
    
        }

setClock('timer', deadline);

}); 