//JS. Урок 9. Обработка событий в DOM (события мыши и клавиатуры)

console.log(document.body);

//load - позволяет дождаться всей загрузки страницы и вывести любой код, какой укажем. Есть еще DOMContentLoaded - но он загрущает только html без картинок, скриптов, стилей. 

window.addEventListener('load', function(){
    console.log('Страница загружена');
    console.log(document.body);

    //куб

    let block = document.querySelector('.block');

    //mouseover - нaведение мыши на элемент

    block.addEventListener('mouseover', function(){
        console.log('Курсор на .block');
        console.log(this); //показывает в консоле и сам объект

        this.style.backgroundColor = 'red';
    });

    //mouseout - мышь покидает элемент

    block.addEventListener('mouseout', function(){
        console.log('Курсор покинул .block');
        console.log(this); //показывает в консоле и сам объект

        this.style.backgroundColor = 'blue';
    });

     //mousemove -перемещение мыши по элементу

     block.addEventListener('mousemove', function(){
        console.log('Курсор перемещается по .block');
        console.log(this); //показывает в консоле и сам объект

        this.style.borderRadius = '50%';
    });

    //mousedown - нажали мышкй и не отпускаем

    block.addEventListener('mousedown', function(){
        console.log('Ты нажал и держишь .block');

        this.style.backgroundColor = 'yellow';
    });

     //mouseup - отпускание кнопки мыши
     block.addEventListener('mouseup', function(){
        console.log('Ты отпустил мышь .block');

        this.style.backgroundColor = ''; //востановили первоначальный цвет
    });
    
    //генерируем случайным образом цвет бади с помощью функций

    let bgChangeButton = document.querySelector('.bgchange button'),
        bgChange = function(){
            let r = Math.floor(Math.random() * 256),
                g = Math.floor(Math.random() * 256),
                b = Math.floor(Math.random() * 256);

            // document.body.style.backgroundColor = 'rgb(210,25,87)';- делает один цвет
            document.body.style.backgroundColor = 'rgb('+ r + ','+ g + ','+ b + ')'; //делает рандомные цвета
        };

        bgChangeButton.addEventListener('click', bgChange);
        
        //обращаемся к списку элементов, нельзя ко всем доюавить, надо все равно делать перебор элементов

        let links = document.querySelectorAll('.links a');
        console.log(links);

        //forEach - перебирает все элементы или можно черерз for

        links.forEach(function(element){
            //sconsole.log(element);

            element.addEventListener('click', function(){
                console.log(this); //вот так отслеживаем любое сбытие
                
                links.forEach(function(element){
                    element.classList.remove('active');
                }); //с помощью remove и перебора убираем класс, если нажали на другой элемент

                this.classList.add('active'); //добавляем класс каждому элементу (в html только у одного)
            });


            //создали новый класс hover со стилями css
            // element.addEventListener('mouseover', function() {
            //     this.classList.add('hover');
            // });

            // element.addEventListener('mouseout', function() {
            //     this.classList.remove('hover');
            // });


             //создали новый класс hover со стилями css - тоже самое, только с toggle
            // element.addEventListener('mouseover', function() {
            //     this.classList.toggle('hover');
            // });

            // element.addEventListener('mouseout', function() {
            //     this.classList.toggle('hover');
            // });

              //создали новый класс hover со стилями css - тоже самое, только с toggle - второй способ

            let hover = function() {
                this.classList.toggle('hover');
            };

            element.addEventListener('mouseover', hover);
            element.addEventListener('mouseout', hover);
                      
        });

        //статья, работаем с ссылкой в статье, а точнее отменяем стандартное дестве браузера. Можно работать с this(через енего обращаемся к любому элементу) and event(втроенные аргумент)

        let articleA = document.querySelector('.post a.google');

        articleA.addEventListener('click', function(event) {

           // alert('Click');
           // console.log(this);

           event.preventDefault(); //отменяет дйствия браузера

           console.log(event);

           console.log(event.target);
           // console.log(this);  тоже самое, что  и console.log(event.target);

           event.target.setAttribute('href', 'https://myitschool.by'); //задаем .target.setAttribute новвую ссылку для элемента а в тексте

           window.location.href = event.target.href; // разрешаем перейти по ссылке

        
        });

        //всплытие 
        
        let article = document.querySelector('.post'),
            content = document.querySelector('.content'),
            p = document.querySelector('p'),
            link = p.querySelector('.link');

        console.log(article, content, p, link);

        article.addEventListener('click', function(){
            alert('Click article');
        });

        content.addEventListener('click', function(){
            alert('Click content');
        });

        p.addEventListener('click', function(){
            alert('Click p');
        });

        link.addEventListener('click', function(){
            alert('Click link');
        });

        //погружение -  добавляем .addEventListener третее значение true

        article = document.querySelector('.post'),
            content = document.querySelector('.content'),
            p = document.querySelector('p'),
            link = p.querySelector('.link');

        console.log(article, content, p, link);

        article.addEventListener('click', function(){
            alert('Click article');
        }, true);

        content.addEventListener('click', function(){
            alert('Click content');
        }, true);

        p.addEventListener('click', function(){
            alert('Click p');
        }, true);

        link.addEventListener('click', function(){
            alert('Click link');
        }, true);


        //отслеживаем форму по событию submit

        let form = document.querySelector('.form form');

        // form.addEventListener('submit', function(){
        //     alert('Форма отправлена'); первый способ, просто выводим сообщение

        form.addEventListener('submit', function(event){
            if (!confirm('Отправить форму?')) {
                event.preventDefault(); //если нажимаем отмена, то прекращаем действия браузера
            } else {
                alert('Спасибо за отправку');
            } // спрашиваем у пользоватля, хочет ли он отправить форму
            
        });

        //клавиатурные события
        //keydown - нажали и держим клавишу
        //keyup - отпускание клавиши
        //keypress - отрабатывают тлько буквы и цифры или символы

        let input = form.querySelector('input[name="email"]');

        input.addEventListener('keydown', function(event) {
            //console.log(event);
            //console.log(event.key);//видим в консли любую клавишу
        });

        input.addEventListener('keyup', function(event) {
            //console.log(event);
            //console.log(event.key);//видим в консли любую клавишу
        });

        input.addEventListener('keypress', function(event) {
            //console.log(event);
           // console.log(event.key);//видим в консли любую клавишу
        });

        //когда нажимаем клавишу выводить значение из input, но последнее значение в коноль не вводит

        input.addEventListener('keypress', function(event) {
            //console.log(event);
            //console.log(event.target.value);//В КОНСОЛИ ВИДИМ ТО, что вводим в input
        });

         //когда нажимаем клавишу выводить значение из input, в том числе последнее значение в коноль 
        input.addEventListener('keyup', function(event) {
            console.log(event.target.value);
        });
});

