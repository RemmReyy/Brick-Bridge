
        // Установите дату и время окончания таймера
        var endTime = new Date('2024-04-21 19:46:00').getTime();

        // Обновление таймера каждую секунду
        var timerInterval = setInterval(function() {
            var now = new Date().getTime();
            var distance = endTime - now;

            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById('dayT').innerHTML = days;
            document.getElementById('hoursT').innerHTML = hours;
            document.getElementById('minutesT').innerHTML = minutes;

            // Когда время вышло, вы можете добавить дополнительную логику
            if (distance < 0) {
                clearInterval(timerInterval);
                document.getElementById('myLink').classList.remove('disabled');
                document.getElementById('dayT').innerHTML = '00';
            document.getElementById('hoursT').innerHTML = '00';
            document.getElementById('minutesT').innerHTML = '00';
            }
        }, 1000);
        updateTimer();